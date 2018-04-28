import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

export default class TabNavigation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: Number.isInteger(props.activeIndex) ? props.activeIndex : null
		}
		this.handleNavigationClick = this.handleNavigationClick.bind(this)
	}

	handleNavigationClick(selectedIndex) {
		if (this.state.activeIndex !== selectedIndex) {
			this.setState({ activeIndex: selectedIndex })
			this.props.onNavigationClick(selectedIndex)
		}
	}

	render() {
		const { navigations } = this.props
		return (
			<div style={ styles.wrapper }>
				{
					navigations && navigations.map((nav, index) => { 
						const itemStyle = Object.assign(
							{},
							styles.navItem,
							{ width: `${ 100 / navigations.length }%` },
							index === this.state.activeIndex ? styles.navItemFocus : {}
						)
						return (
							<div key={ `tabNav-${ index }` } style={ itemStyle }>
								<Button 
									text={ nav.text } 
									fill={ true }
									focus={ index === this.state.activeIndex ? true : false }
									icon={ nav.icon ? nav.icon : '' }
									iconPosition='left'
									onClick={ () => this.handleNavigationClick(index) }/>
							</div>
						)
					})
				}
			</div>
		)
	}
}

TabNavigation.propTypes = {
	navigations: PropTypes.arrayOf(PropTypes.object),
	onNavigationClick: PropTypes.func
}

TabNavigation.defaultProps = {
	navigations: [],
	onNavigationClick: function() {}
}

const styles = {
	wrapper: {
		height: '40px',
		boxSizing: 'border-box',
		overflow: 'hidden',
		position: 'relative',
		width: '100%'
	},
	navItem: {
		borderBottom: '1px solid',
		borderColor: 'transparent',
		float: 'left',
		height: '39px'
	},
	navItemFocus: {
		borderColor: '#37B8D5'
	}
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

export default class BottomNavigation extends Component {
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
		const itemStyle = Object.assign(
			{},
			styles.navItem,
			{ width: `${ 100 / navigations.length }%` }
		)
		return (
			<div style={ styles.wrapper }>
				{
					navigations && navigations.map((nav, index) =>
						<div key={ `btmNav-${ index }` } style={ itemStyle }>
							<Button 
								text={ nav.text } 
								fill={ true }
								color={ nav.color ? nav.color : 'default' }
								focus={ index === this.state.activeIndex ? true : false }
								icon={ nav.icon ? nav.icon : '' }
								iconPosition='top'
								onClick={ () => this.handleNavigationClick(index) }/>
						</div>
					)
				}
			</div>
		)
	}
}

BottomNavigation.propTypes = {
	navigations: PropTypes.arrayOf(PropTypes.object),
	onNavigationClick: PropTypes.func
}

BottomNavigation.defaultProps = {
	navigations: [],
	onNavigationClick: function() {}
}

const styles = {
	wrapper: {
		bottom: 0,
		height: '70px',
		boxSizing: 'border-box',
		overflow: 'hidden',
		position: 'absolute',	
		width: '100%'
	},
	navItem: {
		float: 'left',
		height: '100%'
	}
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Dropdown from '../Dropdown'
import Button from '../Button'

export default class StatBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedPeriodIndex: 0
		}
		this.handlePeriodChange = this.handlePeriodChange.bind(this)
	}

	handlePeriodChange(selectedIndex) {
		if (this.state.selectedPeriodIndex !== selectedIndex) {
			this.setState({ selectedPeriodIndex: selectedIndex })
		}
	}

	render() {
		const { periods, stats, currency } = this.props
		const periodList = periods.map(period => period.text)
		const selectedStat = stats.reduce((result, current) => 
			current.periodId === this.state.selectedPeriodIndex ? current : result
		,	null)
		console.log(this.state)
		console.log(selectedStat)
		return (
			<div style={ styles.statBox }>
				<div style={ styles.dropdown }>
					<Dropdown 
						block={ true }
						items={ periodList } 
						onItemClick={ (selectedIndex) => this.handlePeriodChange(selectedIndex) }
						placeholder={ false }
						transparentOnClosed={ true } 
						colorWhenTransparent='#fff' />
				</div>
				<div style={ styles.statWrapper }>
					<div style={ styles.primaryStat }>{ selectedStat.text }</div>
					<div style={ styles.secondaryStat }>({ currency })</div>
				</div>
				<div>
					<Button text='See Full Report' color='blue' block={ true } />
				</div>
			</div>
		)
	}
}

StatBox.propTypes = {
	periods: PropTypes.array,
	stats: PropTypes.array,
	currency: PropTypes.string
}

StatBox.defaultProps = {
	periods: [],
	stats: [],
	currency: 'IDR'
}

const styles = {
	statBox: {
		background: '#38c3e3',
		borderRadius: '5px',
		boxSizing: 'border-box',
		color: '#fff',
		overflow: 'hidden',
		padding: '16px 0 0',
		textAlign: 'center'
	},
	dropdown: {
		height: '40px',
		margin: 'auto',
		position: 'relative',
		width: '60%',
		zIndex: 1
	},
	statWrapper: {
		boxSizing: 'border-box',
		display: 'block',
		lineHeight: '60px',
		padding: '10px 16px 24px',
		position: 'relative',
		width: '100%'
	},
	primaryStat: {
		display: 'inline',
		fontSize: '24px',
		margin: '8px'
	},
	secondaryStat: {
		display: 'inline',
		fontSize: '16px',
		margin: '16px 4px 0'
	}
}

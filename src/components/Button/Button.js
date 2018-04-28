import React, { Component } from 'react'
import PropTypes from 'prop-types'
import chroma from 'chroma-js'

export default class Button extends Component {
	constructor(props) {
		super(props)
		this.availableColors = ['default', 'blue', 'red']
		this.state = {
			hovered: false
		}
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
	}

	handleMouseEnter(event) {
		if (!this.state.hovered) this.setState({ hovered: true })
	}

	handleMouseLeave(event) {
		if (this.state.hovered) this.setState({ hovered: false })
	}

	generateIconStyle({ iconPosition, iconSize }) {
		const availablePositions = ['left', 'top', 'right']
		const availableSizes = {
			default: '16px',
			large: '28px'
		}
		const selectedPosition = availablePositions.includes(iconPosition) 
			? iconPosition
			: 'left'
		const selectedSize = iconSize in availableSizes ? availableSizes[iconSize] : availableSizes.default
		return Object.assign(
			{},
			{ fontSize: selectedSize },
			selectedPosition === 'left' ? { float: 'left', marginRight: '10px' } : {},
			selectedPosition === 'right' ? { float: 'right', marginLeft: '10px' } : {},
			selectedPosition === 'top' ? { display: 'block', width: '100%' } : {},
		)
	}
	
	render() {
		const { text, onClick, block, fill, color, gap, focus, icon } = this.props
		const selectedColor = this.availableColors.includes(color) ? styles[color] : styles.default
		const mergedStyle = Object.assign(
			{}, 
			styles.button,
			selectedColor,
			block ? styles.block : {},
			fill ? styles.fill : {},
			gap ? styles.gap : {},
			focus ? { background: chroma(selectedColor.background).darken(0.15) } : {},
			this.state.hovered ? { background: chroma(selectedColor.background).darken(0.2) } : {},
		)
		const iconStyle = icon ? this.generateIconStyle(this.props) : {}

		return (
			<button
				style={ mergedStyle }
				onMouseEnter={ this.handleMouseEnter }
				onMouseLeave={ this.handleMouseLeave }
				onClick={ onClick }>
				{ icon ? <div style={ iconStyle }>{ icon }</div> : null }
				{ text }
			</button>
		)
	}
}

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	block: PropTypes.bool,
	fill: PropTypes.bool,
	color: PropTypes.string,
	gap: PropTypes.bool,
	focus: PropTypes.bool,
	icon: PropTypes.any,
	iconPosition: PropTypes.string,
	iconSize: PropTypes.string
}

Button.defaultProps = {
	text: '',
	onClick: function() {},
	block: false,
	fill: false,
	color: 'default',
	gap: false,
	focus: false,
	icon: false,
	iconPosition: 'left',
	iconSize: 'default'
}

const styles = {
	button: {
		border: 'none',
		boxSizing: 'border-box',
		cursor: 'pointer',
		fontSize: '16px',
		padding: '8px 15px'
	},
	block: {
		display: 'block',
		width: '100%'
	},
	fill: {
		display: 'block',
		height: '100%',
		width: '100%'
	},
	gap: {
		margin: '5px'
	},
	default: {
		background: '#fcfcfc',
		color: '#888',
	},
	blue: {
		background: '#37B8D5',
		color: '#fff'
	},
	red: {
		background: '#E3475E',
		color: '#fff'
	}
}

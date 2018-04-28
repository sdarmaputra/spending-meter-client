import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: props.value ? props.value : '',
			focused: false
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.setFocus = this.setFocus.bind(this)
		this.unsetFocus = this.unsetFocus.bind(this)
	}

	handleInputChange(event) {
		this.setState({ value: event.target.value })
	}

	setFocus() {
		this.setState({ focused: true })
	}

	unsetFocus() {
		this.setState({ focused: false })
	}

	render() {
		const { type, placeholder, block } = this.props
		const finalStyle = Object.assign(
			{},
			styles.input,
			this.state.focused ? styles.focused : {},
			block ? styles.block :  {}
		)
		return (
			<input
				style={ finalStyle }
				type={ type } 
				placeholder={ placeholder } 
				value={ this.state.value }
				onChange={ this.handleInputChange }
				onFocus={ this.setFocus }
				onBlur={ this.unsetFocus }/>
		)
	}
}

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	block: PropTypes.bool
}

Input.defaultProps = {
	type: 'text',
	placeholder: 'Put something here...',
	value: '',
	block: false
}

const styles = {
	input: {
		border: 'none',
		borderBottom: '1px solid #ddd',
		boxSizing: 'border-box',
		color: '#888',
		padding: '10px 4px'
	},
	focused: {
		borderColor: '#37B8D5'
	},
	block: {
		width: '100%'
	}
}

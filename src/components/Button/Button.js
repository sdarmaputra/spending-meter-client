import React, { Component } from 'react'

export default class Button extends Component {
	constructor(props) {
		super(props)
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
	
	render() {
		const { text } = this.props
		const mergedStyle = Object.assign({}, styles.default, this.state.hovered ? styles.hovered : {})
		return (
			<button
				style={ mergedStyle }
				onMouseEnter={ this.handleMouseEnter }
				onMouseLeave={ this.handleMouseLeave }>
				{ text }
			</button>
		)
	}
}

const styles = {
	default: {
		background: ' #5dade2',
		border: 'none',
		color: '#fff',
		cursor: 'pointer',
		padding: '8px 15px'
	},
	hovered: {
		background: '#2471a3'
	}
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
			selectedIndex: 0
		}
		this.toggle = this.toggle.bind(this)
		this.handleItemClick = this.handleItemClick.bind(this)
		this.clearSelectedItem = this.clearSelectedItem.bind(this)	
		this.getItems = this.getItems.bind(this)
	}

	toggle() {
		this.setState({ isOpen: !this.state.isOpen })
	}

	handleItemClick(selectedIndex) {
		if (this.state.selectedIndex !== selectedIndex) {
			this.setState({ selectedIndex, isOpen: false })
			this.props.onItemClick(selectedIndex)
		}
	}

	clearSelectedItem() {
		this.setState({ selectedIndex: 0, isOpen: false })
	}

	getItems() {
		const { items, placeholder } = this.props
		const finalItems = placeholder ? [
			'- Select one -',
			...items
		] : items
		return finalItems
	}

	render() {
		const { block, fill, width, transparentOnClosed, colorWhenTransparent } = this.props
		const items = this.getItems()
		const selectedText = items[this.state.selectedIndex] 
		const dropdownStyles = Object.assign(
			{}, 
			styles.dropdown, 
			!this.state.isOpen && transparentOnClosed ? { background: 'transparent' } : {},
			this.state.isOpen ? styles.dropdownOpened : {},
			width ? { width } : {},
			block ? styles.block : {}
		)
		const placeHolderStyles = Object.assign(
			{},
			styles.item,
			!this.state.isOpen && transparentOnClosed ? { color: colorWhenTransparent } : {}
		)
		const caretStyles = Object.assign(
			{},
			styles.caret,
			!this.state.isOpen && transparentOnClosed ? { color: colorWhenTransparent } : {}
		)

		return (
			<div style={ dropdownStyles }>
				<div style={ caretStyles }>&#9662;</div>
				<div 
					style={ placeHolderStyles } 
					onClick={ this.toggle }>
					{ selectedText }
				</div>
				{
					this.state.isOpen 
					&& items
					&& items.map((item, index) => 
						<Item 
							key={ `d-${ index }` } 
							item={ item } 
							onClick={ () => this.handleItemClick(index) }/>
					)
				}
			</div>
		)
	}
}

Dropdown.propTypes = {
	items: PropTypes.array,
	onItemClick: PropTypes.func,
	placeholder: PropTypes.bool,
	block: PropTypes.bool,
	width: PropTypes.number,
	transparentOnClosed: PropTypes.bool,
	colorWhenTransparent: PropTypes.string
}

Dropdown.defaultProps = {
	items: [],
	onItemClick: function() {},
	placeholder: true,
	block: false,
	width: 200,
	transparentOnClosed: false,
	colorWhenTransparent: '#888'
}

class Item extends Component {
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
		const { item, onClick } = this.props
		const style = Object.assign({}, styles.item, this.state.hovered ? styles.itemHovered : {})
		return (
			<div 
				style={ style } 
				onMouseEnter={ this.handleMouseEnter }
				onMouseLeave={ this.handleMouseLeave }
				onClick={ onClick }>
				{ item }
			</div>
		)
	}
}

const commons = {
	height: '40px'
}

const styles = {
	dropdown: {
		background: '#fefefe',
		borderColor: '#f2f2f2',
		boxSizing: 'border-box',
		cursor: 'pointer',
		minHeight: commons.height,
		position: 'absolute',
		transition: 'background, box-shadow 0.15s ease-in'
	},
	dropdownOpened: {
		border: '1px solid #efefef',
		boxShadow: '0 2px 2px 2px #efefef'
	},
	block: {
		width: '100%',
	},
	caret: {
		color: '#999',
		position: 'absolute',
		right: '10px',
		top: '10px'
	},
	item: {
		color: '#888',
		padding: '8px 16px',
		textAlign: 'center'
	},
	itemHovered: {
		background: '#fafafa'
	}
}


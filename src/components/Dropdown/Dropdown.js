import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hoverd: false
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

class Dropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
			selectedIndex: 0
		}
		this.toggle = this.toggle.bind(this)
		this.handleSelectedItem = this.handleSelectedItem.bind(this)
		this.clearSelectedItem = this.clearSelectedItem.bind(this)	
		this.getItems = this.getItems.bind(this)
		this.handleOutsideClick = this.handleOutsideClick.bind(this)
	}

	componentDidMount() {
		window.addEventListener('click', this.handleOutsideClick)
	}

	handleOutsideClick(event) {
		console.log(event)
		console.log(this)
	}

	toggle() {
		this.setState({ isOpen: !this.state.isOpen })
	}

	handleSelectedItem(selectedIndex) {
		if (this.state.selectedIndex !== selectedIndex) {
			this.setState({ selectedIndex, isOpen: false })
		}
	}

	clearSelectedItem() {
		this.setState({ selectedIndex: 0, isOpen: false })
	}

	getItems() {
		const { items } = this.props
		const finalItems = [
			'- Select one -',
			...items
		]
		return finalItems
	}

	render() {
		const items = this.getItems()
		const selectedText = items[this.state.selectedIndex] 
		return (
			<div style={ styles.dropdown }>
				<div 
					style={ styles.item } 
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
							onClick={ () => this.handleSelectedItem(index) }/>
					)
				}
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
		border: '1px solid',
		borderColor: '#f2f2f2',
		cursor: 'pointer',
		minHeight: commons.height
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

Dropdown.propTypes = {
	items: PropTypes.array
}

export default Dropdown

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Dropdown from '../Dropdown'

export default class TopBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeWalletIndex: Number.isInteger(props.activeWalletIndex) ? props.activeWalletIndex : 0
		}
		this.handleWalletChange = this.handleWalletChange.bind(this)
		this.getWallets = this.getWallets.bind(this)
	}

	handleWalletChange(selectedIndex) {
		if (this.state.activeWalletIndex !== selectedIndex) {
			this.setState({ activeWalletIndex: selectedIndex })
		}
	}

	getWallets() {
		const { wallets } = this.props
		if (wallets.length > 0) return wallets
		else return ['No wallet yet'] 
	}

	render() {
		const { title } = this.props
		const wallets = this.getWallets()
		return (
			<div style={ styles.wrapper }>
				<div style={ styles.innerWrapper }>
					<div style={ styles.title }>{ title }</div>
					<div style={ styles.walletDropdown }>
						<Dropdown 
							block={ true }
							items={ wallets } 
							onItemClick={ this.handleWalletChange }
							placeholder={ false } />
					</div>
				</div>
			</div>
		)
	}
}

TopBar.propTypes = {
	title: PropTypes.string,
	wallets: PropTypes.array,
	activeWalletIndex: PropTypes.number
}

TopBar.defaultProps = {
	title: '',
	wallets: [],
	activeWalletIndex: 0
}

const styles = {
	wrapper: {
		boxSizing: 'border-box',
		height: '50px',
		left: 0,
		padding: '8px 16px',
		position: 'fixed',
		top: 0,
		width: '100%'
	},
	innerWrapper: {
		position: 'relative',
		height: '100%',
		width: '100%'
	},
	title: {
		color: '#222',
		fontWeight: 'bold',
		lineHeight: '25px'
	},
	walletDropdown: {
		position: 'absolute',
		right: 0,
		top: 0,
		width: '160px'
	}
}

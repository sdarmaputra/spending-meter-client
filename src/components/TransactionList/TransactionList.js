import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TransactionList = ({ transactions }) =>
	<div>
		{ 
			transactions && transactions.map((transaction, index) =>
				<TransactionRow
					key={ `trx-${ index }` }
					title={ transaction.title }
					description={ transaction.description }
					date={ transaction.date }/>	
			)
		}
	</div>

TransactionList.propTypes = {
	transactions: PropTypes.array
}

TransactionList.defaultProps = {
	transactions: []
}

const TransactionRow = ({ title, description, date, onClick }) =>
	<div style={ styles.transactionRow } onClick={ onClick }>
		<div style={ styles.title }>{ title }</div>
		<div style={ styles.description }>{ description }</div>
		<div style={ styles.date }>{ date }</div>
	</div>

TransactionRow.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
	onClick: PropTypes.func
}

TransactionRow.defaultProps = {
	onClick: function() {}
}

const styles = {
	transactionRow: {
		boxSizing: 'border-box',
		cursor: 'pointer',
		display: 'block',
		padding: '8px',
		position: 'relative',
		width: '100%'
	},
	title: {
		color: '#333',
		display: 'block',
		width: '100%'
	},
	description: {
		color: '#999',
		display: 'block',
		fontSize: '14px',
		width: '100%'
	},
	date: {
		color: '#bbb',
		fontSize: '12px',
		position: 'absolute',
		right: '8px',
		top: '8px'
	}
}

export default TransactionList

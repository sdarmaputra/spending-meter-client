import React from 'react'

import Dropdown from '../components/Dropdown'
import TransactionList from '../components/TransactionList'
import withEmptyPlaceholder from '../components/utils/withEmptyPlaceholder'

const transactionGroups = ['Today', 'This month']

const shownTransactions = [
	{
		title: 'Spent 10.000',
		description: 'Eating @warteg',
		date: 'Mar 17, 18:00'
	},
	{
		title: 'Spent 5.000',
		description: 'Buy snack',
		date: 'Mar 17, 19:00'
	}
	,{
		title: 'Spent 10.000',
		description: 'Tahu Tek',
		date: 'Mar 17, 20:00'
	},
]

const TransactionListWithEmpty = withEmptyPlaceholder(TransactionList, 'transactions')

const Transactions = ({ transactionGroups, shownTransactions }) =>
	<div>
		<div style={ styles.dropdownWrapper }>
			<div style={ styles.dropdown }>
				<Dropdown items={ transactionGroups } placeholder={ false } block={ true } />
			</div>
		</div>
		<TransactionListWithEmpty transactions={ shownTransactions } />
	</div>

const styles = {
	dropdownWrapper: {
		display: 'block',
		height: '40px',
		marginBottom: '24px',
		width: '100%'
	},
	dropdown: {
		margin: 'auto',
		position: 'relative',
		width: '200px'
	}
}

const FinalComponent = () => 
	<Transactions 
		transactionGroups={ transactionGroups } 
		shownTransactions={ shownTransactions } />

export default FinalComponent

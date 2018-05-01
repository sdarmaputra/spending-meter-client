import React, { Component } from 'react'

import StatBox from '../components/StatBox'
import ProgressList from '../components/ProgressList'
import TransactionList from '../components/TransactionList'

import withSectionTitle from '../components/utils/withSectionTitle'
import withEmptyPlaceholder from '../components/utils/withEmptyPlaceholder'

const periods = [
	{
		text: 'Today expenses'
	},
	{
		text: 'This month expenses'
	}
]

const stats = [
	{
		periodId: 0,
		text: 20000
	},
	{
		periodId: 1,
		text: 1200000
	}
]

const transactions = [
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

const progressSummaries = [
	{
		title: 'Personal',
		currentValue: 80000,
		maxValue: 100000
	},
	{
		title: 'Food & Beverages',
		currentValue: 65000,
		maxValue: 100000
	},
	{
		title: 'Transportation',
		currentValue: 15000,
		maxValue: 50000
	}
]

const ProgressListWithTitle = withSectionTitle(
	withEmptyPlaceholder(ProgressList, 'progressSummaries')
, 'Budgets')
const TransactionListWithTitle = withSectionTitle(
	withEmptyPlaceholder(TransactionList, 'transactions')
, 'Recent Transactions')

const Home = ({ currency, stats, periods, progressSummaries, transactions }) => 
	<div>
		<StatBox periods={ periods } stats={ stats } currency={ currency } style={ styles.statBox } />
		<ProgressListWithTitle progressSummaries={ progressSummaries } style={ styles.section } />
		<TransactionListWithTitle transactions={ transactions } style={ styles.section } />
	</div>
		
const styles = {
	statBox: {
		marginBottom: '32px'
	},
	section: {
		marginBottom: '16px'
	}
}

const FinalComponent = () => 
	<Home 
		currency='IDR' 
		stats={ stats } 
		periods={ periods }
		progressSummaries={ progressSummaries }
		transactions={ transactions } />


export default FinalComponent

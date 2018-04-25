import React from 'react'
import { storiesOf } from '@storybook/react'

import TransactionList from './TransactionList'

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

const wrapperStyle = {
	border: '1px solid #fafafa',
	margin: 'auto',
	width: '300px'
}

const wrapper = (story) =>
	<div style={ wrapperStyle }>
		{ story() }
	</div>

storiesOf('TransactionList', module)
	.addDecorator(wrapper)
	.add('standard', () => <TransactionList transactions={ transactions } />)



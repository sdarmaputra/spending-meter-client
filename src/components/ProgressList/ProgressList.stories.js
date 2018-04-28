import React from 'react'
import { storiesOf } from '@storybook/react'

import ProgressList from './ProgressList'
import withSectionTitle from '../utils/withSectionTitle'
import withEmptyPlaceholder from '../utils/withEmptyPlaceholder'

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

const wrapperStyle = {
	border: '1px solid #fafafa',
	margin: 'auto',
	width: '300px'
}

const wrapper = (story) =>
	<div style={ wrapperStyle }>
		{ story() }
	</div>

const ProgressListWithTitle = withSectionTitle(ProgressList, 'Progress')
const ProgressListWithEmpty = withSectionTitle(withEmptyPlaceholder(ProgressList, 'progressSummaries'), 'Progress')

storiesOf('ProgressList', module)
	.addDecorator(wrapper)
	.add('standard', () => <ProgressList progressSummaries={ progressSummaries } />)
	.add('with section title', () => <ProgressListWithTitle progressSummaries={ progressSummaries } />)
	.add('with empty placeholder', () => <ProgressListWithEmpty />)



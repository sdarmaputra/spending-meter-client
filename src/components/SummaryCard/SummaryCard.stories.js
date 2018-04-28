import React from 'react'
import { storiesOf } from '@storybook/react'

import SummaryCard from './SummaryCard'

const wrapperStyle = {
	border: '1px solid #fafafa',
	margin: 'auto',
	width: '300px'
}

const wrapper = (story) =>
	<div style={ wrapperStyle }>
		{ story() }
	</div>

storiesOf('SummaryCard', module)
	.addDecorator(wrapper)
	.add('standard', () => 
		<SummaryCard 
			primaryTitle='Primary Title'
			secondaryTitle='secondary title'
			content='This is the content' />
	)

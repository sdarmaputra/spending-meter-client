import React from 'react'
import { storiesOf } from '@storybook/react'


import Dropdown from './Dropdown'

const standardItems = ['First', 'Second', 'Third']

storiesOf('Dropdown', module)
	.add('standard', () => <Dropdown items={ standardItems } />)
	.add('selected index defined', () => <Dropdown items={ standardItems } selectedIndex={2} />)
	.add('with callback', () => 
		<Dropdown 
			items={ standardItems } 
			onItemClick={(selectedIndex) => alert(`You've selected index: '${ selectedIndex }'`)} />)

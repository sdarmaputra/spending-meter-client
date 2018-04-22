import React from 'react'
import { storiesOf } from '@storybook/react'


import Dropdown from './Dropdown'

const standardItems = ['First', 'Second', 'Third']

storiesOf('Dropdown', module)
	.add('standard', () => <Dropdown items={ standardItems } />)
import React from 'react'
import { storiesOf } from '@storybook/react'

import StatBox from './StatBox'

storiesOf('StatBox', module)
	.add('standard', () => <StatBox periods={ periods } stats={ stats } currency='IDR' />)

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

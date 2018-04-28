import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { fileText } from 'react-icons-kit/icomoon/fileText'
import { equalizer2 } from 'react-icons-kit/icomoon/equalizer2'
import { ic_control_point  } from 'react-icons-kit/md/ic_control_point'

import TabNavigation from './TabNavigation'

const navigations = [
	{
		text: 'Home',
		icon: <Icon icon={ home } />
	},
	{
		text: 'Transactions',
		icon: <Icon icon={ fileText } />
	},
	{
		text: 'Settings',
		icon: <Icon icon={ equalizer2 } />
	},
	{
		text: 'New',
		icon: <Icon icon={ ic_control_point } />
	}
]

const textNavigations = [
	{
		text: 'Home',
	},
	{
		text: 'Transactions',
	},
	{
		text: 'Settings',
	},
	{
		text: 'New',
	}
]

storiesOf('TabNavigation', module)
	.add('standard', () => 
		<div>
			<TabNavigation navigations={ navigations } /><br/>
			<TabNavigation navigations={ textNavigations } /><br/>
			<TabNavigation navigations={ textNavigations } activeIndex={0} /><br/>
		</div>
	)



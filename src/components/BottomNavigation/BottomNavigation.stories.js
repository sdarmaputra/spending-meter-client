import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { fileText } from 'react-icons-kit/icomoon/fileText'
import { equalizer2 } from 'react-icons-kit/icomoon/equalizer2'
import { ic_control_point  } from 'react-icons-kit/md/ic_control_point'

import BottomNavigation from './BottomNavigation'

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
		color: 'red',
		icon: <Icon icon={ ic_control_point } />
	}
]

const iconNavigations = [
	{
		icon: <Icon icon={ home } />
	},
	{
		icon: <Icon icon={ fileText } />
	},
	{
		icon: <Icon icon={ equalizer2 } />
	},
	{
		color: 'red',
		icon: <Icon icon={ ic_control_point } />
	}
]


storiesOf('BottomNavigation', module)
	.add('standard', () => <BottomNavigation navigations={ navigations } />)
	.add('icon only', () => <BottomNavigation navigations={ iconNavigations } />)
	.add('initial active index', () => <BottomNavigation navigations={ iconNavigations } activeIndex={0} />)



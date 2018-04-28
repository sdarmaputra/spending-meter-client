import React from 'react'
import { storiesOf } from '@storybook/react'

import TopBar from './TopBar'

const wallets = ['Personal', 'Saving']

storiesOf('TopBar', module)
	.add('standard', () => 
		<TopBar 
			title='Spending Meter'
			wallets={ wallets }
			activeWalletIndex={0} />
	)

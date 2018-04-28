import React from 'react'
import { storiesOf } from '@storybook/react'

import ProgressBar from './ProgressBar'

storiesOf('ProgressBar', module)
	.add('standard', () => 
		<div>
			<ProgressBar percentage={10} />
			<ProgressBar percentage={25} />
			<ProgressBar percentage={70} />
		</div>
	)	
	.add('colored', () => 
		<div>
			<ProgressBar percentage={10} color='#38afe3' />
			<ProgressBar percentage={25} color='#f0be60' />
			<ProgressBar percentage={70} color='#f0606f' />
		</div>
	)	

import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from './Input'

storiesOf('Forms', module)
	.add('Input', () => 
		<div>	
			<Input /><br/>
			<Input type='password' placeholder='Type password...'/><br/>
			<Input placeholder='Block input' block={ true }/><br/>
		</div>
	)

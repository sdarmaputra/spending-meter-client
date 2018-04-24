import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { pencil } from 'react-icons-kit/icomoon/pencil'
import { equalizer2 } from 'react-icons-kit/icomoon/equalizer2'

import Button from './Button'

storiesOf('Button', module)
	.add('standard', () => <Button text='Hey! I am a button :)' color='blue' />)
	.add('blocked', () => <Button text='I am a huge button' color='blue' block={true} />)
	.add('with colors', () =>
		<div>
			<h6>Button without gap</h6>
			<Button text='Default' color='default' />
			<Button text='Blue' color='blue' />
			<Button text='Red' color='red' />
			
			<h6>Button with gap</h6>
			<Button text='Default' color='default' gap={true} />
			<Button text='Blue' color='blue' gap={true} />
			<Button text='Red' color='red' gap={true} />
		</div>
	)
	.add('with focus', () => 
		<div>
			<Button text='Default' color='default' />
			<Button text='Default Focused' color='default' focus={true} />
			<br />
			<Button text='Blue' color='blue' />
			<Button text='Blue Focused' color='blue' focus={true} />
			<br />
			<Button text='Red' color='red' />
			<Button text='Red Focused' color='red' focus={true} />
		</div>
	)
	.add('with icon', () =>
		<div>
			<Button text='Left Icon' color='default' gap={true} icon={ <Icon icon={ home } /> } iconPosition='left'/>
			<Button text='Right Icon' color='blue' gap={true} icon={ <Icon icon={ pencil } /> } iconPosition='right'/>
			<Button text='Top Icon' color='red' gap={true} icon={ <Icon icon={ equalizer2 } /> } iconPosition='top' />
		</div>		
	)
	.add('with callback', () => 
		<Button 
			text="Click Me!" 
			color='blue' 
			onClick={() => alert('Hey! You clicked me')}/>
	)

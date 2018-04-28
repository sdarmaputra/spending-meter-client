import React from 'react'

const withSectionTitle = (WrappedComponent, title) => (props) =>
	<div>
		<div style={ titleStyle }>{ title }</div>
		{ <WrappedComponent {...props} /> }
	</div>

const titleStyle = {
	color: '#222',
	display: 'block',
	fontWeight: 'bold',
	marginBottom: '12px',
	width: '100%'
}

export default withSectionTitle

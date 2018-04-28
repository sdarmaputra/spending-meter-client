import React from 'react'

const withEmptyPlaceholder = (WrappedComponent, monitoredProp) => (props) => {
	const isShown = Array.isArray(props[monitoredProp]) && props[monitoredProp].length > 0 ? true : false
	return (
		<div>
			{
				isShown ? <WrappedComponent { ...props } /> : <div style={ emptyStyle }>No item available</div>
			}
		</div>
	)
}

const emptyStyle = {
	boxSizing: 'border-box',
	color: '#bbb',
	display: 'block',
	height: '32px',
	lineHeight: '32px',
	textAlign: 'center',
	width: '100%'
}

export default withEmptyPlaceholder

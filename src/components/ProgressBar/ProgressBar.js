import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ percentage, color }) => {
	let finalPercentage = percentage
	if (percentage > 100) finalPercentage = 100
	else if (percentage < 0) finalPercentage = 0
	const progressStyle = Object.assign(
		{},
		styles.progress,
		{ width: `${ finalPercentage  }%` },
		color ? { background: color } : {}
	)
	return (
		<div style={ styles.fullBar }>
			<div style={ progressStyle }></div>
		</div>
	)
}

ProgressBar.propTypes = {
	percentage: PropTypes.number,
	color: PropTypes.string
}

ProgressBar.defaultProps = {
	percentage: 0,
	color: null
}

const styles = {
	fullBar: {
		height: '5px',
		margin: '12px 0',
		position: 'relative',
		width: '100%'
	},
	progress: {
		background: '#aaa',
		height: '5px',
		left: 0,
		position: 'absolute',
		top: 0
	}
}

export default ProgressBar

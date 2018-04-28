import React from 'react'
import PropTypes from 'prop-types'

const SummaryCard = ({ primaryTitle, secondaryTitle, content, onClick }) =>
	<div style={ styles.summaryCard} onClick={ onClick }>
		<div style={ styles.primaryTitle }>{ primaryTitle }</div>
		<div style={ styles.content }>{ content }</div>
		<div style={ styles.secondaryTitle }>{ secondaryTitle }</div>
	</div>

SummaryCard.propTypes = {
	primaryTitle: PropTypes.string,
	secondaryTitle: PropTypes.string,
	content: PropTypes.any,
	onClick: PropTypes.func
}

SummaryCard.defaultProps = {
	onClick: function() {}
}

const styles = {
	summaryCard: {
		boxSizing: 'border-box',
		cursor: 'pointer',
		display: 'block',
		padding: '8px',
		position: 'relative',
		width: '100%'
	},
	primaryTitle: {
		color: '#333',
		display: 'block',
		width: '100%'
	},
	secondaryTitle: {
		color: '#bbb',
		fontSize: '12px',
		position: 'absolute',
		right: '8px',
		top: '8px'
	},
	content: {
		color: '#999',
		display: 'block',
		fontSize: '14px',
		margin: '8px 0',
		width: '100%'
	}
}

export default SummaryCard

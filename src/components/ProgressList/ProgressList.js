import React from 'react'
import PropTypes from 'prop-types'

import SummaryCard from '../SummaryCard'
import ProgressBar from '../ProgressBar'

const ProgressList = ({ progressSummaries }) => 
	<div>
		{ 
			progressSummaries && progressSummaries.map((progress, index) => {
				const percentage = (progress.currentValue / progress.maxValue) * 100 
				let color = null
				if ( percentage > 75 ) color = '#E3475E'
				else if (percentage > 50) color = '#e39047'
				else color = '#37B8D5'
				return (
					<SummaryCard
						key={ `prgrs-${ index }` }
						primaryTitle={ progress.title }
						content={ <ProgressBar percentage={ percentage } color={ color } /> }
						secondaryTitle={ `${ progress.currentValue }/${ progress.maxValue }` }/>	
				)
			})
		}
	</div>

ProgressList.propTypes = {
	progressSummaries: PropTypes.array
}

ProgressList.defaultProps = {
	progressSummaries: []
}

export default ProgressList

import React from 'react'
import PropTypes from 'prop-types'

import SummaryCard from '../SummaryCard'

const TransactionList = ({ transactions, style }) =>
	<div style={ style }>
		{ 
			transactions && transactions.map((transaction, index) =>
				<SummaryCard
					key={ `trx-${ index }` }
					primaryTitle={ transaction.title }
					content={ transaction.description }
					secondaryTitle={ transaction.date }/>	
			)
		}
	</div>

TransactionList.propTypes = {
	transactions: PropTypes.array,
	style: PropTypes.object
}

TransactionList.defaultProps = {
	transactions: [],
	style: {}
}

export default TransactionList

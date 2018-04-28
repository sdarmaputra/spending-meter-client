import React from 'react'
import PropTypes from 'prop-types'

import SummaryCard from '../SummaryCard'

const TransactionList = ({ transactions }) =>
	<div>
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
	transactions: PropTypes.array
}

TransactionList.defaultProps = {
	transactions: []
}

export default TransactionList

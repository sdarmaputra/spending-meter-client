import React from 'react'
import MediaQuery from 'react-responsive'
import {
	HashRouter as Router,
	Route
} from 'react-router-dom'

import TopBar from './components/TopBar'
import BottomNavigation from './components/BottomNavigation'

import withRouterNavigation from './components/utils/withRouterNavigation'

import Icon from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { fileText } from 'react-icons-kit/icomoon/fileText'
import { equalizer2 } from 'react-icons-kit/icomoon/equalizer2'
import { ic_control_point  } from 'react-icons-kit/md/ic_control_point'

import Home from './pages/Home'
import Transactions from './pages/Transactions'

const navigations = [
	{
		icon: <Icon icon={ home } />
	},
	{
		icon: <Icon icon={ fileText } />
	},
	{
		icon: <Icon icon={ equalizer2 } />
	},
	{
		color: 'red',
		icon: <Icon icon={ ic_control_point } />
	}
]

const wallets = ['Personal', 'Saving']

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/transactions',
		component: Transactions
	}
]

const BottomNavigationWithRouter = withRouterNavigation(BottomNavigation, routes, 'onNavigationClick')

const App = () => 
	<Router>
		<MediaQuery minDeviceWidth={ 496 }>
			{(matches) => {
				let bottomNavigationInnerStyle = styles.bottomNavigationInner
				let topBarInnerStyle = styles.topBarInner
				let contentWrapperStyle = styles.contentWrapper
				if (matches) {
					bottomNavigationInnerStyle = Object.assign({}, styles.bottomNavigationInner, { width: '496px' })
					topBarInnerStyle = Object.assign({}, styles.topBarInner, { width: '496px' })
					contentWrapperStyle = Object.assign({}, styles.contentWrapper, { width: '496px' })

				}
				return (
					<div style={ styles.container }>
						<div style={ styles.topBar }>
							<div style={ topBarInnerStyle }>
								<TopBar title='Home' wallets={ wallets } />
							</div>
						</div>
						<div style={ contentWrapperStyle }>
							{
								routes.map((route, index) => 
									<Route key={ `route-${ index }` } exact={ route.exact } path={ route.path } component={ route.component } />
								)
							}
						</div>
						<div style={ styles.bottomNavigation }>
							<div style={ bottomNavigationInnerStyle }>
								<BottomNavigationWithRouter navigations={ navigations } />
							</div>
						</div>
					</div>
				)
			}}
		</MediaQuery>
	</Router>
		
const styles = {
	container: {
		padding: '50px 0 70px'
	},
	topBar: {
		background: '#fff',
		top: 0,
		left: 0,
		position: 'fixed',
		width: '100%',
		zIndex: 9
	},
	topBarInner: {
		height: '50px',
		margin: 'auto',
		position: 'relative',
		width: '100%'
	},
	bottomNavigation: {
		background: '#fff',
		borderTop: '1px solid #efefef',
		bottom: 0,
		left: 0,
		position: 'fixed',
		width: '100%',
		zIndex: 9
	},
	bottomNavigationInner: {
		height: '70px',
		margin: 'auto',
		position: 'relative',
		width: '100%'
	},
	contentWrapper: {
		boxSizing: 'border-box',
		margin: 'auto',
		padding: '0 8px',
		position: 'relative',
		width: '100%'
	}
}

export default App

import React from 'react'
import { withRouter } from 'react-router'

const withRoutes = (WrappedComponent, routes, onClickHandler) => (props) => {
	const onHandlerClick = (routeIndex) => {
		const selectedRoute = routes[routeIndex]
		if (
			typeof selectedRoute === 'object' 
			&& selectedRoute.path
			&& props.location.pathname !== selectedRoute.path
		){
			props.history.push(routes[routeIndex].path)
		}
	}

	const wrappedComponentProps = {}
	wrappedComponentProps[onClickHandler] = onHandlerClick

	return <WrappedComponent { ...wrappedComponentProps } { ...props } />
}

const withRouterNavigation = (WrappedComponent, routes, onClickHandler) =>
	withRouter(withRoutes(WrappedComponent, routes, onClickHandler))

export default withRouterNavigation

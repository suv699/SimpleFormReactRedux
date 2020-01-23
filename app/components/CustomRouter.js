import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function CustomRouter ({ user, component: Component, userData, ...rest}) {
	return (
		<Route {...rest} render={
			props => (
				user ? <Component userData={userData} /> : <Redirect to="/login"/>
			)
		}/>
	);
};
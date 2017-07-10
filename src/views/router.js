import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home';

const router = () => (
	<section className="content">
		<Route exact path="/" render={() => (<Redirect to="/home" />)} />
		<Route exact path="/home" component={Home} />
	</section>
);

export default router;

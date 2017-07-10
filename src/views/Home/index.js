import React from 'react';
import { Box } from 'fairy';
import cssModules from 'react-css-modules';

import styles from './index.scss';

class Home extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<Box title="Welcome">
					React Start Kit start success. Let rock!
				</Box>
			</div>
		);
	}
}

export default cssModules(Home, styles);

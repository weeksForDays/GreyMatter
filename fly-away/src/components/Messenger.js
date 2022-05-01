import React from 'react';
import {db} from '../firebase';

const Messenger = () => {

	const test = () => {
		return "test";
	}

	return (
		<div>
			{test()}
		</div>
	)
}

export default Messenger;
import React from 'react';
import {Card} from 'react-bootstrap';
import '../css/DataDisplayer.css';

const DataDisplayer = (props) => {

	return (
		<Card className="flexItem outline">
			<div>
				<h1 id="email" >Email: {props.email}</h1>
            </div>
		</Card>
	);
}

export default DataDisplayer;
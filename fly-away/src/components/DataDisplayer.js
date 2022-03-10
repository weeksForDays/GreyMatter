import React from 'react';
import {Card} from 'react-bootstrap';
import '../css/DataDisplayer.css';

const DataDisplayer = (props) => {

	return (
		<Card className="flexItem outline">
			<div>
				<h1>Name: {props.name}</h1>
				<h1>Age: {props.age}</h1>
            </div>
		</Card>
	);
}

export default DataDisplayer;
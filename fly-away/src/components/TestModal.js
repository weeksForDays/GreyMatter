import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default class TestModal extends React.Component {

	render() {

		if (!this.props.open) return null;

		// makeTransparent does not work correctly
		return (
			<div>
				<Card style={{ width: '25rem' }} className="card">
					<Card.Body className="card makeTransparent">
						<Card.Title>You stumble into a strange modal</Card.Title>
							<Card.Text>
									"Well hello there."
							</Card.Text>
						<Button variant="primary" onClick={this.props.handleObfuscateFunc}>Go somewhere. Fast.</Button>
					</Card.Body>
				</Card>
			</div>
		)
	}

}
import React from 'react';
import ReactDom from 'react-dom';
import {Card} from 'react-bootstrap';
import '../css/DataDisplayer.css';

const ComponentModal = (props) => {

	if (!props.open) return null;

	return ReactDom.createPortal(
		<div>
			<div className="centeronpage">
				<Card>
					<Card.Header className="componentModalTitle">
						{props.title}
					</Card.Header>
					<Card.Body>
						{props.modalComponent}
					</Card.Body>
				</Card>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default ComponentModal;
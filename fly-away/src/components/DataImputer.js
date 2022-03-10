import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {db} from '../firebase';
import {collection, addDoc} from 'firebase/firestore';
import '../css/DataDisplayer.css';

const DataImputer = (props) => {

	const usersCollectionRef = collection(db, "Users");

	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState("");

	const createUser = async () => {
		await addDoc(usersCollectionRef, {name: name, age: age});
		props.updateFunc();
	}

	const handleSubmit = (e) => {
		//e.preventDefault();

		if (name === "" || age === "") {
			setError("Must fill out all required fields!")
			return;
		}

		createUser();

		setAge("");
		setName("");
		setError("");
	}

	return (
		<div>
			{error && <Alert className="mt-3" variant="danger">{error}</Alert>}
			<Form>
				<Form.Group className="mb-3 mt-3" controlId="formName">
					<Form.Control placeholder="Enter Name" type="text" onChange={e => {setName(e.target.value)}} />
					<Form.Text className="text-muted">Make it Juicy!</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formAge">
					<Form.Control placeholder="Enter Age" type="number" onChange={e => {setAge(e.target.value)}} />
				</Form.Group>
				<div className="alignButtons">
					<Button variant="primary" type="reset" onClick={handleSubmit}>Add</Button>
					<Button variant="secondary" onClick={props.closeModal}>Close</Button>
				</div>
			</Form>
		</div>
	);
}

export default DataImputer;
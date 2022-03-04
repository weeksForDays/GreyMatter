import React, {useState} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
//import {useAuth} from '../contexts/AuthContext';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState(false);
	// const { signup } = useAuth();

	const handleSubmit = () => {
		// signup(email, password);
	}

	return (
		<React.Fragment>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control onChange={(event) => setEmail(event.target.value)} value={email} type="email" required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control onChange={(event) => setPassword(event.target.value)} value={password} type="password"  required />
						</Form.Group>
						<Form.Group id="password-confirm">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control onChange={(event) => setPasswordConfirm(event.target.value)} value={passwordConfirm} type="password" required />
						</Form.Group>
						<Button onClick={() => handleSubmit()} className="w-100 mt-4" type="submit">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? Log In
			</div>
		</React.Fragment>
	);
}
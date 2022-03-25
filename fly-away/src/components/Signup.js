import React, {useState} from 'react';
import {Card, Button, Form, Alert} from 'react-bootstrap';
import '../css/login.css';
import {Link, useNavigate} from 'react-router-dom';
import {useUserAuth} from "../contexts/UserAuthContext";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const { signUp } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		if (password !== confirmPass) {
			setError("Passwords do not match.");
			return;
		}

		try {
			await signUp(email, password);
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	}

	return (

		<div className="p-4 centeronscreen centertext loginwidth">
		<h2 className="mb-3">Sign Up for FlyAway</h2>
		{error && <Alert variant="danger">{error}</Alert>}
			<Form className="loginwidth" onSubmit={handleSubmit}>
				<Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
					<Form.Control
						type='email' 
						placeholder='Email Address'
						onChange={ (e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Control 
						type='password' 
						placeholder='Password'
						onChange={ (e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formConfirmPassword">
					<Form.Control 
						type='password' 
						placeholder='Confirm Password'
						onChange={ (e) => setConfirmPass(e.target.value)}
					/>
				</Form.Group>
				
				<div className="d-grid gap-2">
					<Button variant="primary" type="Submit">
						Signup
					</Button>
				</div>
				<span>
					Already have an account? <Link to='/'>Log in.</Link>
				</span>

			</Form>
		</div>
	)
}

export default Signup;
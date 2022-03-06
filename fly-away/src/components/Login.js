import React, {useState} from 'react';
import {Card, Button, Form, Alert} from 'react-bootstrap';
import '../css/login.css';
import GoogleButton from 'react-google-button';
import {Link, useNavigate} from 'react-router-dom';
import {useUserAuth} from "../contexts/UserAuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const { logIn, googleSignIn } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			await logIn(email, password);
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	}

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();

		try {
			await googleSignIn();
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<div className="p-4 centeronscreen centertext loginwidth">
		<h2 className="mb-3 d-flex justify-content-center">Firebase Auth Login</h2>
		{error && <Alert variant="danger">{error}</Alert>}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3 mt-4">
					<Form.Control 
					type='email' 
					placeholder='Email Address'
					onChange={ (e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control 
					type='password' 
					placeholder='Password'
					onChange={ (e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<div className="d-grid gap-2">
					<Button variant="primary" type="Submit">
						Log In
					</Button>
				</div>
				<div>
					<GoogleButton 
					className="g-btn 
					google" type="dark" 
					onClick={handleGoogleSignIn}
					/>
				</div>
				<span>
					Need an account? <Link to="/signup">Sign Up.</Link>
				</span>

			</Form>
		</div>
	)
}

export default Login;
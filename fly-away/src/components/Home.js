import React from 'react';
import { Button } from "react-bootstrap";
import '../css/login.css';
import '../css/Home.css';
import {useUserAuth} from "../contexts/UserAuthContext";
import {useNavigate} from 'react-router-dom';

const Home = () => {

	const {logOut} = useUserAuth();

	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await logOut();
			navigate('/');
		} catch {
			console.log("Error with signout");
		}
	}

	const handleFirestoreNav = () => {
		navigate('/firestoretest');
	}

	return (
		<div>
			<div className="centeronscreen loginwidth">
				<div className = "p-4 box mt-3 text-center">Hello World</div>
				<div className = "d-grid gap-2">
					<Button variant = "primary" onClick={handleLogOut}>Log Out</Button>
					<Button variant = "secondary" onClick={handleFirestoreNav}>Firestore Demo</Button>
				</div>
			</div>
		</div>
	);
}

export default Home;
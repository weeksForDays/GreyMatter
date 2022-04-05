import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import '../css/login.css';
import '../css/Home.css';
import {useUserAuth} from "../contexts/UserAuthContext";
import {useNavigate} from 'react-router-dom';
import {useUserGen} from '../contexts/UserGenContext';

const Home = () => {

	const {createUser} = useUserGen();

	const {logOut} = useUserAuth();

	const navigate = useNavigate();

	const [userGen, setUserGen] = useState(false);

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

	const handleNewAccountNav = () => {
		navigate('/accountGen');
	}
	
	const handleMessengerNav = () => {
		navigate('/messenger');
	}

	const handleUserGenTest = () => {
		createUser(true, "test@test.com", "343");
	}

	return (
		<div>
			<div className="centeronscreen loginwidth">
				<div className = "d-grid gap-2">
					<Button variant = "primary" onClick={handleLogOut}>Log Out</Button>
					<Button variant = "secondary" onClick={handleFirestoreNav}>Firestore Demo</Button>
					<Button variant = "secondary" onClick={handleNewAccountNav}>New Account</Button>
					<Button variant = "secondary" onClick={handleMessengerNav}>Messenger Test</Button>
					<Button variant = "secondary" onClick={handleUserGenTest}>UserGen Test</Button>
				</div>
			</div>
		</div>
	);
}

export default Home;
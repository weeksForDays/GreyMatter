import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import '../css/login.css';
import '../css/Home.css';
import {useUserAuth} from "../contexts/UserAuthContext";
import {useNavigate} from 'react-router-dom';
import {useFirestore} from '../contexts/FirestoreContext';

const Home = () => {

	const {createConversation, findConvo, logRef} = useFirestore();

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
		createConversation([{isPilot: true, ID: 343}, {isPilot: false, ID: 69420}]);
		createConversation([{isPilot: true, ID: 33}, {isPilot: false, ID: 6920}]);
		const convo = findConvo([{isPilot: true, ID: 343}, {isPilot: false, ID: 69420}]);

		logRef(convo);

	}

	return (
		<div>
			<div className="centeronscreen loginwidth">
				<div className = "d-grid gap-2">
					<Button variant = "primary" onClick={handleLogOut}>Log Out</Button>
					<Button variant = "secondary" onClick={handleFirestoreNav}>Firestore Demo</Button>
					<Button variant = "secondary" onClick={handleNewAccountNav}>New Account</Button>
					<Button variant = "secondary" onClick={handleMessengerNav}>Messenger Test</Button>
					<Button variant = "secondary" onClick={handleUserGenTest}>CreateConversation Test</Button>
				</div>
			</div>
		</div>
	);
}

export default Home;
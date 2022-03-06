import React from 'react';
import { Button } from "react-bootstrap";
import '../css/login.css';
import {useUserAuth} from "../contexts/UserAuthContext";
import {Navigate, useNavigate} from 'react-router-dom';

const Home = () => {
	const {user, logOut} = useUserAuth();

	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await logOut();
			navigate('/');
		} catch {
			console.log("Error with signout");
		}
	}

	return (
		<div className="centeronscreen loginwidth">
			<div className = "p-4 box mt-3 text-center"> Hello World</div>
			<div className = "d-grid gap-2">
				<Button variant = "primary" onClick={handleLogOut}>Log Out</Button>
			</div>
		</div>
	);
}

export default Home;
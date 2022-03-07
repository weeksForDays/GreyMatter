import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import '../css/login.css';
import '../css/Home.css';
import {useUserAuth} from "../contexts/UserAuthContext";
import {Navigate, useNavigate} from 'react-router-dom';
import { useObfuscation } from '../contexts/ObfuscationContext';

const Home = () => {

	let cssClasses = ["centeronscreen", "loginwidth"];

	const {obfuscated, toggleObfuscated} = useObfuscation();
	const test = true;

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

	const handleObfuscate = () => {
		toggleObfuscated();
	}

	if (obfuscated) {
		cssClasses.push("blur");
	}

	return (
		<div className={cssClasses.join(" ")}>
			<div className = "p-4 box mt-3 text-center">Hello World</div>
			<div className = "d-grid gap-2">
				<Button variant = "primary" onClick={handleLogOut}>Log Out</Button>
				<Button variant = "secondary" onClick={handleObfuscate}>Obfuscate</Button>
			</div>
		</div>
	);
}

export default Home;
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import '../css/login.css';
import '../css/Home.css';
import {useUserAuth} from "../contexts/UserAuthContext";
import {Navigate, useNavigate} from 'react-router-dom';
import { useObfuscation } from '../contexts/ObfuscationContext';
import TestModal from './TestModal';

const Home = () => {

	let cssClasses = ["centeronscreen", "loginwidth"];
	const [isModelOpen, setIsModalOpen] = useState(false);

	const {obfuscated, toggleObfuscated, setObfuscated} = useObfuscation();

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
		setObfuscated(true);
		setIsModalOpen(true);
	}

	const handleDeobfuscate = () => {
		setObfuscated(false);
		setIsModalOpen(false);
	}

	if (obfuscated) {
		cssClasses.push("blur");
		cssClasses.push("disableClickEvents");
	}

	return (
		<div>
			<div className={cssClasses.join(" ")}>
				<div className = "p-4 box mt-3 text-center">Hello World</div>
				<div className = "d-grid gap-2">
					<Button variant = "primary" onClick={handleLogOut}>Log Out</Button>
					<Button variant = "secondary" onClick={handleObfuscate}>Obfuscate</Button>
				</div>
			</div>
			<div className="centeronscreen d-flex justify-content-center">
				<TestModal open={isModelOpen} handleObfuscateFunc={handleDeobfuscate}>
					This is a test.
				</TestModal>
			</div>
		</div>
	);
}

export default Home;
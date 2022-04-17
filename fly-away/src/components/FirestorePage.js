import React, {useState, useEffect} from 'react';
import DataImputer from './DataImputer';
import DataDisplayer from './DataDisplayer';
import ComponentModal from './ComponentModal';
import {useNavigate} from 'react-router-dom';
import { useObfuscation } from '../contexts/ObfuscationContext';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase';
import {Button} from 'react-bootstrap';
import '../css/Home.css';
import '../css/login.css';
import '../css/DataDisplayer.css';

const FirestorePage = () => {

	const navigate = useNavigate();

	const {obfuscated, setObfuscated} = useObfuscation();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "UsersTest");

	let cssClasses = ["App", "alignVert"];

	const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

	useEffect(() => {
		getUsers();
	}, []);

	const handleObfuscate = () => {
		setObfuscated(true);
		setIsModalOpen(true);
	}

	const handleDeobfuscate = () => {
		setObfuscated(false);
		setIsModalOpen(false);
	}

	const handleAddData = () => {
		handleObfuscate();
		getUsers();
	}

	const handleGoHome = () => {
		navigate('/');
	}

	if (obfuscated) {
		cssClasses.push("blur");
		cssClasses.push("disableClickEvents");
	}

	return (
		<div>
			<ComponentModal 
			open={isModalOpen} 
			modalComponent={<DataImputer updateFunc={getUsers} closeModal={handleDeobfuscate} />} 
			title="Add Data"
			/>
			<div className={cssClasses.join(" ")}>
				<div className="alignButtons fixButtons">
					<Button variant='primary' onClick={handleAddData}>
						Add Data
					</Button>
					<Button variant='secondary' onClick={handleGoHome}>
						Go Home
					</Button>
				</div>
				<div id="title">
					<h1>List of all user accounts</h1>
				</div>
				{users.map((user) => {
						return (
							<div key={user.id}>
								<DataDisplayer email={user.email}/>
							</div>
						)
					})}
			</div>
		</div>
	);
}

export default FirestorePage;
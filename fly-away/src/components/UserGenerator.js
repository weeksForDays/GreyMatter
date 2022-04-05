import React from 'react';
import {db} from '../firebase';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore';
import {useUserGen} from '../contexts/UserGenContext';

const UserGenerator = () => {

	const {test} = useUserGen();

	test();
	console.log("hello world");

	return (
		<div>
		</div>
	);
}

export default UserGenerator;
import React, {createContext, useEffect, useState, useContext} from "react";
import {db} from '../firebase';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore';

const firestoreContext = createContext();

export function FirestoreContextProvider({children}) {

	const createUser = async (isPilot, email, ID) => {
		if (isPilot) {
			createPilot(email, ID);
		} else {
			createPassenger(email, ID);
		}
	}

	const createPilot = async (userEmail, userID) => {
		setDoc(doc(db, "Users", "Pilots", "Accounts", userID.toString()), {
			email: userEmail,
			ID: userID
		});
	}

	const createPassenger = async (userEmail, userID) => {
		await setDoc(doc(db, "Users", "Passengers", "Accounts", userID.toString()), {
			email: userEmail,
			ID: userID
		});
	}

	const createConversation = async (users) => {
		await addDoc(doc(db, "Conversations"), {
			
		});
	}

	return (
		<firestoreContext.Provider value={{createUser}}>
			{children}
		</firestoreContext.Provider>
	)

}

export function useFirestore() {
	return useContext(firestoreContext);
}
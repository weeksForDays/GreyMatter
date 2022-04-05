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

	// This needs a way to generate a unique name for every conversation, in a way that can then be queried in code...
	const createConversation = async (users) => {
		const convoRef = await addDoc(collection(db, "Conversations"), {
			Users: {
				test: "test"
			}
		});

		users.map(async user => {

			await setDoc(doc(db, "Conversations", convoRef.id.toString()), {
				Users: {
					[user.ID]: {
						ID: user.ID,
						isPilot: user.isPilot
					}
				}
			}, {merge: true});
		})

		console.log(convoRef, " ", convoRef.id);
	}

	return (
		<firestoreContext.Provider value={{createUser, createConversation}}>
			{children}
		</firestoreContext.Provider>
	)

}

export function useFirestore() {
	return useContext(firestoreContext);
}
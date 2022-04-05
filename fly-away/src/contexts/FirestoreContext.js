import React, {createContext, useEffect, useState, useContext} from "react";
import {db} from '../firebase';
import {collection, addDoc, setDoc, doc, Timestamp} from 'firebase/firestore';

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
		const convoRef = await addDoc(collection(db, "Conversations"), {
			Users: {
			}
		});

		users.map(async user => {

			await setDoc(doc(db, "Conversations", convoRef.id.toString()), {
				Users: {
					[user.ID]: {
						ID: user.ID,
						isPilot: user.isPilot,
						Text: {}
					}
				}
			}, {merge: true});

			//Can use this format to add messages to a conversation, just need to find a way to get the convo ref into the addMessage function and name the texts uniquely
			await setDoc(doc(db, "Conversations", convoRef.id.toString()), {
				Users: {
					[user.id]: {
						Text: {
							text1: {
								text: "This is a text"
							}
						}
					}
				}
			})
		})
	}

	const addMessage = async () => {
		
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
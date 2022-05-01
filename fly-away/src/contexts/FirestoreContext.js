import React, {createContext, useEffect, useState, useContext} from "react";
import {db} from '../firebase';
import {collection, addDoc, setDoc, doc, Timestamp, query, where, getDocs} from 'firebase/firestore';

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

	// REQUIREMENTS THAT NEED TO BE IMPLEMETED, CONVOS MUST HAVE MORE THAN ONE PERSON (duh)
	// REQUIREMENTS THAT NEED TO BE IMPLEMENTED BECAUSE OF FIREBASE, ONLY UP TO 10 USERS PER CONVO AND NO DUPE CONVOS (EXACT SAME USERS)
	const createConversation = async (users) => {

		let userArr = users.map(user => {
			return user.ID;
		})

		const convoRef = await addDoc(collection(db, "Conversations"), {
			IDs: userArr,
			Texts: {},
			numTexts: 0
		});

		/**
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
					[user.ID]: {
						Text: {
							text1: {
								text: "This is a text"
							}
						}
					}
				}
			}, {merge: true})
		})**/
	}

	const logRef = (ref) => {
		getDocs(ref).then( snapshot => {
			let temp = [];
			snapshot.docs.forEach( doc => {
				temp.push({...doc.data(), id: doc.id})
			})
			console.log(temp);
		})
	}

	// DOESN'T CHECK IF THE QUERY WAS SUCCESSFUL
	const findConvo = async (users) => {

		let userArr = users.map(user => {
			return user.ID;
		})

		const convoRef = collection(db, "Conversations");

		return await query(convoRef, where("IDs", "in", [userArr]));
		
	}
	
	// ASSUMES IT WAS PASSED ONLY ONE CONVO
	const addMessage = async (convo, text, userID) => {

		await setDoc(doc(db, "Conversations", convo.id.toString()), {
			Texts: {

			}
		}, {merge: true})
	}

	return (
		<firestoreContext.Provider value={{createUser, createConversation, findConvo, addMessage, logRef}}>
			{children}
		</firestoreContext.Provider>
	)

}

export function useFirestore() {
	return useContext(firestoreContext);
}
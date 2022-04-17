import React, {createContext, useEffect, useState, useContext} from "react";
import {db} from '../firebase';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore';

const firestoreContext = createContext();

export function FirestoreContextProvider({children}) {

	const createUser = async (isPilot, email, ID, firstName, lastName, address, city, 
		state, ZIP, phone, cert, airport, ICAO, aircraft, aircraftID) => {
		if (isPilot) {
			createPilot(email, ID, firstName, lastName, address, city, 
				state, ZIP, phone, cert, airport, ICAO, aircraft, aircraftID);
		} else {
			createPassenger(email, ID, firstName, lastName, address, city, 
				state, ZIP, phone);
		}
	}

	const createPilot = async (userEmail, userID, userFirstName, userLastName, userAddress, userCity, 
		userState, userZIP, userPhone, pilotCert, pilotAirport, pilotICAO, pilotAircraft, pilotAircraftID ) => {
		await setDoc(doc(db, "Users", "Pilots", "Accounts", userID.toString()), {

			//Attributes shared between users
			email: userEmail,
			ID: userID,
			firstName: userFirstName,
			lastName: userLastName,
			address: userAddress,
			city: userCity,
			state: userState,
			ZIP: userZIP,
			phone: userPhone,

			//Attributes unique to pilots
			cert: pilotCert,
			airport: pilotAirport,
			ICAO: pilotICAO,
			aircraft: pilotAircraft,
			aircraftID: pilotAircraftID

		});
	}

	const createPassenger = async (userEmail, userID, userFirstName, userLastName, userAddress, userCity, 
		userState, userZIP, userPhone) => {
		await setDoc(doc(db, "Users", "Passengers", "Accounts", userID.toString()), {
			
			//Attributes shared between users
			email: userEmail,
			ID: userID,
			firstName: userFirstName,
			lastName: userLastName,
			address: userAddress,
			city: userCity,
			state: userState,
			ZIP: userZIP,
			phone: userPhone

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
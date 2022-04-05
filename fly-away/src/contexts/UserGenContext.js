import React, {createContext, useEffect, useState, useContext} from "react";
import {db} from '../firebase';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore';

const userGenContext = createContext();

export function UserGenContextProvider({children}) {

	const test = async () => {
		const newCityref = await setDoc(doc(db, "cities", "LA"), {
			name: "Los Angeles",
			state: "CA",
			people: {guy: "steve", gal: "stave"}
		});
		
	}

	return (
		<userGenContext.Provider value={{test}}>
			{children}
		</userGenContext.Provider>
	)

}

export function useUserGen() {
	return useContext(userGenContext);
}
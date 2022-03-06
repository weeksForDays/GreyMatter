import React, {createContext, useEffect, useState, useContext} from "react";
import {auth} from '../firebase';

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {

	const [user, setUser] = useState("");

	function signUp(email, pass) {
		return createUserWithEmailAndPassword(auth, email, pass);
	}

	function logIn(email, pass) {
		return signInWithEmailAndPassword(auth, email, pass);
	}

	function logOut() {
		return signOut(auth);
	}

	function googleSignIn() {
		const googleAuthProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleAuthProvider);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		}
	}, []);

	return (
		<userAuthContext.Provider value={ {user, signUp, logIn, logOut, googleSignIn} }>
			{children}
		</userAuthContext.Provider>
	)
}

export function useUserAuth() {
	return useContext(userAuthContext);
}
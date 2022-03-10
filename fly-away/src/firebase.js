import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBqFLJkOwuSn5t6_WYO7bV76UehGa7lro",
  authDomain: "flyaway-by-greymatter.firebaseapp.com",
  projectId: "flyaway-by-greymatter",
  storageBucket: "flyaway-by-greymatter.appspot.com",
  messagingSenderId: "277739664024",
  appId: "1:277739664024:web:ebf03cecee3f2c7d8416ed",
  measurementId: "G-0QMH1FV05D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
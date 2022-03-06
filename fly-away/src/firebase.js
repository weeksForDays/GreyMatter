import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBqFLJkOwuSn5t6_WYO7bV76UehGa7lro",
  authDomain: "flyaway-by-greymatter.firebaseapp.com",
  projectId: "flyaway-by-greymatter",
  storageBucket: "flyaway-by-greymatter.appspot.com",
  messagingSenderId: "277739664024",
  appId: "1:277739664024:web:ebf03cecee3f2c7d8416ed",
  measurementId: "G-0QMH1FV05D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
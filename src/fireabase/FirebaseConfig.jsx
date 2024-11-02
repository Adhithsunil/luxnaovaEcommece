// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbrFI93wr-SHcHUQBI29LQaTH3Q1-5o5Y",
  authDomain: "myfirstapp-f3f50.firebaseapp.com",
  projectId: "myfirstapp-f3f50",
  storageBucket: "myfirstapp-f3f50.appspot.com",
  messagingSenderId: "466279425448",
  appId: "1:466279425448:web:2c2ee999f4a2779da7a99d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from './firebase';
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA3dXijTetHFS7NadlT35ItW1qNl82xG9I",
    authDomain: "vurb-bf66d.firebaseapp.com",
    databaseURL: "https://vurb-bf66d-default-rtdb.firebaseio.com/",
    projectId: "vurb-bf66d",
    storageBucket: "vurb-bf66d.appspot.com",
    messagingSenderId: "603236807900",
    appId: "1:603236807900:web:fa22d039f84aecb9017019"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app)

export default app;
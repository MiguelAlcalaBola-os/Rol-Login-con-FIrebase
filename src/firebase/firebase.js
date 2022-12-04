// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX_eAqZlFq6LjT3S0YbsNFATqDDSoHIpg",
  authDomain: "cris-auth.firebaseapp.com",
  databaseURL: "https://cris-auth-default-rtdb.firebaseio.com",
  projectId: "cris-auth",
  storageBucket: "cris-auth.appspot.com",
  messagingSenderId: "272270120696",
  appId: "1:272270120696:web:7986e716acfd1c58384d0d",
  measurementId: "G-75FNFX7THE"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;


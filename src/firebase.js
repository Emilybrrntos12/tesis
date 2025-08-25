// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6q6uH0jrcC_nQXe3-ETyzpJ7fMqodKIQ",
  authDomain: "eb12-e14d5.firebaseapp.com",
  databaseURL: "https://eb12-e14d5-default-rtdb.firebaseio.com",
  projectId: "eb12-e14d5",
  storageBucket: "eb12-e14d5.firebasestorage.app",
  messagingSenderId: "618179108980",
  appId: "1:618179108980:web:288773506479094457f121",
  measurementId: "G-DJHTLS6MJT"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
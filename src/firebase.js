// make sure hide these keys in a .env file
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW4pbc7073yRS227ZcxBCPQx4ZmspPDfg",
  authDomain: "piggybon-5376d.firebaseapp.com",
  projectId: "piggybon-5376d",
  storageBucket: "piggybon-5376d.appspot.com",
  messagingSenderId: "297243699099",
  appId: "1:297243699099:web:b0d0c05de495244e43e33e",
  measurementId: "G-RLYGSK3K44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
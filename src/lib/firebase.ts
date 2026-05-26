// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUqWi3Pe156BQf1TvrCR4NDqYmjbbNccU",
  authDomain: "portfolio-itsdivyanshuno.firebaseapp.com",
  projectId: "portfolio-itsdivyanshuno",
  storageBucket: "portfolio-itsdivyanshuno.firebasestorage.app",
  messagingSenderId: "1057338321351",
  appId: "1:1057338321351:web:060bded44b3e53249551e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
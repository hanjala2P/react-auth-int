// Denger !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtdoZDdLwsC5Ui68jolrw0QKEXqVIky4k",
  authDomain: "react-firebase-auth-int-2b170.firebaseapp.com",
  projectId: "react-firebase-auth-int-2b170",
  storageBucket: "react-firebase-auth-int-2b170.firebasestorage.app",
  messagingSenderId: "511808845056",
  appId: "1:511808845056:web:803570a26553dbbb30efe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
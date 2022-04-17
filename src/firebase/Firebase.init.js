// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsVT6l9OQjR1LR0be7uao-9WwPR_q9aRY",
    authDomain: "family-wellness-center-c7004.firebaseapp.com",
    projectId: "family-wellness-center-c7004",
    storageBucket: "family-wellness-center-c7004.appspot.com",
    messagingSenderId: "885106055936",
    appId: "1:885106055936:web:b7d7cd18a096969a6ab1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
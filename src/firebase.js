// Import the functions you need from the SDKs you need
// import firebase from './firebase'
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp69Y6BeChpzaEBo0vQPBgKGO-WswIK0U",
    authDomain: "nagarro-internship-project1.firebaseapp.com",
    projectId: "nagarro-internship-project1",
    storageBucket: "nagarro-internship-project1.appspot.com",
    messagingSenderId: "152967104970",
    appId: "1:152967104970:web:1d8c3370bfa3527f376733",
    measurementId: "G-30X8JT77B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = firebaseApp.firestore();
const db = getFirestore(app);

export default db;
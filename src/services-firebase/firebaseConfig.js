// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjXlIDvD5JMGZNYhDxHe1jqvvjJwHy7yI",
  authDomain: "reactcoder-goat.firebaseapp.com",
  projectId: "reactcoder-goat",
  storageBucket: "reactcoder-goat.appspot.com",
  messagingSenderId: "353458309746",
  appId: "1:353458309746:web:368d5cae3ea605949c10eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:  process.env.REACT_APP_apiKey,
  authDomain: "reactcoder-goat.firebaseapp.com",
  projectId: "reactcoder-goat",
  storageBucket: "reactcoder-goat.appspot.com",
  messagingSenderId: "353458309746",
  appId: "1:353458309746:web:368d5cae3ea605949c10eb"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

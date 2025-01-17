import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUhTh30Fl91oN_dzeGkMJjUC4Xtym2zJ4",
  authDomain: "yentana25.firebaseapp.com", 
  projectId: "yentana25",
  storageBucket: "yentana25.appspot.com", 
  messagingSenderId: "42331020996",
  appId: "1:42331020996:web:your-app-id-here",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exportez les méthodes d'authentification
export {
  auth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};

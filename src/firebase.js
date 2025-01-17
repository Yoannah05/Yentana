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
  databaseURL: "https://yentana25-default-rtdb.firebaseio.com",
  projectId: "yentana25",
  storageBucket: "yentana25.firebasestorage.app",
  messagingSenderId: "42331020996",
  appId: "1:42331020996:web:59820f4881f8db73887391",
  measurementId: "G-ECZZ2B7H9R",
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

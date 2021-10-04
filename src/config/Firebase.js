import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDnmZpkbQvpswHw3zFvDWVqstSBI8XK5Q",
  authDomain: "crudreact-fs.firebaseapp.com",
  projectId: "crudreact-fs",
  storageBucket: "crudreact-fs.appspot.com",
  messagingSenderId: "1079144500771",
  appId: "1:1079144500771:web:eeed6b11c3bdf249da6b96"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
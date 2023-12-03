// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFD0B0L5l9P-eoce7tkQKWp4e4h3Ppyqc",
  authDomain: "rezza-bbe00.firebaseapp.com",
  projectId: "rezza-bbe00",
  storageBucket: "rezza-bbe00.appspot.com",
  messagingSenderId: "606923722386",
  appId: "1:606923722386:web:3ed009e9519ddeb561204b",
  measurementId: "G-PC1TD2TB04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
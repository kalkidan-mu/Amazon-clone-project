import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// import "firebase/compat/firestore" 
// import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbjGPV8qPqaGDRbBs0SvToH-KrI_JZPrw",
  authDomain: "clone-e2ef2.firebaseapp.com",
  projectId: "clone-e2ef2",
  storageBucket: "clone-e2ef2.firebasestorage.app",
  messagingSenderId: "20517821445",
  appId: "1:20517821445:web:3a02a6c51209c2f210906c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app) 
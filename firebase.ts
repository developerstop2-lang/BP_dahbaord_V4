// Firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your Firebase config

const firebaseConfig = {
    apiKey: "AIzaSyCsg0I5Tyw_JpHcukfsi3e0psYD2ZqvktA",
  authDomain: "bplive-54e5b.firebaseapp.com",
  projectId: "bplive-54e5b",
  storageBucket: "bplive-54e5b.firebasestorage.app",
  messagingSenderId: "167554726315",
  appId: "1:167554726315:web:1ce09f0a6d603512c9faee",
  measurementId: "G-SKCBRJKTHE"
};


// Initialize
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

export default app;

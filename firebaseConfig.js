// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCFjHmF2oUILpd8C1_uTPrRovft4joO2BI",
    authDomain: "household-management-fe3b0.firebaseapp.com",
    databaseURL: "https://household-management-fe3b0-default-rtdb.firebaseio.com",
    projectId: "household-management-fe3b0",
    storageBucket: "household-management-fe3b0.appspot.com",
    messagingSenderId: "3123796221",
    appId: "1:3123796221:web:cb64bc1c9310c704d0c694"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Database and Storage
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };

// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCtsIMfbVCmxgdP8DxQYIpWiLUHfQ5-8-A",
    authDomain: "home-services-b18c0.firebaseapp.com",
    databaseURL: "https://home-services-b18c0-default-rtdb.firebaseio.com",
    projectId: "home-services-b18c0",
    storageBucket: "home-services-b18c0.appspot.com",
    messagingSenderId: "630902927301",
    appId: "1:630902927301:web:b68cd5ec6bcf6853b565ac",
    measurementId: "G-QLWX4LC6EP"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Database and Storage
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };

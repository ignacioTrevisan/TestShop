
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNxu0Y6m4_84vPJUGigAcQd3s8csKrKpI",
    authDomain: "tiendagraciastotales.firebaseapp.com",
    projectId: "tiendagraciastotales",
    storageBucket: "tiendagraciastotales.appspot.com",
    messagingSenderId: "849990641637",
    appId: "1:849990641637:web:749b14f261faf81abf310c"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);


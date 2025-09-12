// Firebase Web SDK (works with Expo Go)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsVAeKDYkCO-vfFbmOB80PkvRmItNrAo8",
  authDomain: "smartspeak-dev-db.firebaseapp.com",
  databaseURL: "https://smartspeak-dev-db.firebaseio.com",
  projectId: "smartspeak-dev-db",
  storageBucket: "smartspeak-dev-db.appspot.com",
  messagingSenderId: "smartspeak",
  appId: "smartspeak",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

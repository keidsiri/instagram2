// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import { get } from "http";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN2BG-M29uzi6rJntPzkGVrRTkRsFA3mU",
  authDomain: "instagram-dev-2a503.firebaseapp.com",
  projectId: "instagram-dev-2a503",
  storageBucket: "instagram-dev-2a503.appspot.com",
  messagingSenderId: "649514421419",
  appId: "1:649514421419:web:2054ecfe6970d636eabbee",
  measurementId: "G-1D5DHC3TP8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export {app, db, storage}; 
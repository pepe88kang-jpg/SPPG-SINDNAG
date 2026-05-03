// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdIyF8EeeW6ZqHd5pOI6cVxNeQrTrWuWA",
  authDomain: "monitoring-gizi-sppg.firebaseapp.com",
  databaseURL: "https://monitoring-gizi-sppg-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-gizi-sppg",
  storageBucket: "monitoring-gizi-sppg.firebasestorage.app",
  messagingSenderId: "24043887645",
  appId: "1:24043887645:web:8161a6132eae10d856baf4",
  measurementId: "G-4RFKG657H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
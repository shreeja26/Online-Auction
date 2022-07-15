import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyCAYg88xX98npfSSeU8conWuNqOlxP9Kq0",
  authDomain: "online-auction-6bc80.firebaseapp.com",
  projectId: "online-auction-6bc80",
  storageBucket: "online-auction-6bc80.appspot.com",
  messagingSenderId: "1032728759924",
  appId: "1:1032728759924:web:e2f24d8edf46cfcd234b21",
  measurementId: "G-TS96D3ZTMR"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0fTCUuPPNZqAsEkjf8tQT4sVdmeIUqUg",
  authDomain: "challenge-4786a.firebaseapp.com",
  databaseURL: "https://challenge-4786a.firebaseio.com",
  projectId: "challenge-4786a",
  storageBucket: "challenge-4786a.appspot.com",
  messagingSenderId: "346164629587",
  appId: "1:346164629587:web:a952e6f274e2cbf5a636a6",
  measurementId: "G-NRVR5C5GJ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Firestore is the realtime database.
const db = firebaseApp.firestore();
// gives us a variable which we can use to handle sign in and more.
const auth = firebase.auth();

export { db, auth };

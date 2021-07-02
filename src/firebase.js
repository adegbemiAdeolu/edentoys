import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsJQpvIqJSuBnGbhEXF2yQYaZcu5zKHEY",
  authDomain: "eden-toys.firebaseapp.com",
  databaseURL: "https://eden-toys-default-rtdb.firebaseio.com",
  projectId: "eden-toys",
  storageBucket: "eden-toys.appspot.com",
  messagingSenderId: "1039115557652",
  appId: "1:1039115557652:web:886742082efef0d58f4001",
  measurementId: "G-SWMXX83W50"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
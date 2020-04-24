import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAYLaH0e7T237DPu7Hnj211n6cgSG9eWfM",
  authDomain: "math-poll.firebaseapp.com",
  databaseURL: "https://math-poll.firebaseio.com",
  projectId: "math-poll",
  storageBucket: "math-poll.appspot.com",
  messagingSenderId: "659420051168",
  appId: "1:659420051168:web:607d6ef4b887ce70210285",
  measurementId: "G-S34MEBFBV9"
};

firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;

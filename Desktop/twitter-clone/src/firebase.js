// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCiktN_vdWhQ-2R6n1GDF75r7qjgBWmnkc",
  authDomain: "twitter-clone-gaps.firebaseapp.com",
  projectId: "twitter-clone-gaps",
  storageBucket: "twitter-clone-gaps.appspot.com",
  messagingSenderId: "512344953080",
  appId: "1:512344953080:web:d3b4d8f103c62d9e156b0d",
  measurementId: "G-G1GZBFB7PY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firebase();

export default db;
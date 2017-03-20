import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7OBTvdAE0kHxsRem120GDNOr8IfignDc",
  authDomain: "one-good-thing.firebaseapp.com",
  databaseURL: "https://one-good-thing.firebaseio.com",
  storageBucket: "one-good-thing.appspot.com",
  messagingSenderId: "861193922955"
};

export const firebaseRef = firebase.initializeApp(firebaseConfig);
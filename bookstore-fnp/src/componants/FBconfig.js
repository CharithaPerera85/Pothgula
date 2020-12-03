// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBu_r5EnbjUcrd_YQHjIk0Oi20ANYD5GCE",
    authDomain: "bookstore-fnp.firebaseapp.com",
    databaseURL: "https://bookstore-fnp.firebaseio.com",
    projectId: "bookstore-fnp",
    storageBucket: "bookstore-fnp.appspot.com",
    messagingSenderId: "203828356465",
    appId: "1:203828356465:web:a65798de2813d0fc1342d0",
    measurementId: "G-7KWGNB268J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
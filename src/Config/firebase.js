import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAMwXzaxBZLGVg4mcV0b9ewwOApNatoxCw",
    authDomain: "firstweb-dda80.firebaseapp.com",
    databaseURL: "https://firstweb-dda80.firebaseio.com",
    projectId: "firstweb-dda80",
    storageBucket: "firstweb-dda80.appspot.com",
    messagingSenderId: "147100450879",
    appId: "1:147100450879:web:1f1efbbe3440065caeb88a",
    measurementId: "G-DQK128YXRC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
export default firebase;
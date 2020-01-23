//
/* eslint-disable */
import * as firebase from 'firebase'

import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAHeW3wm3-vZ7HlVEOCpfGSNnyBkUqc9QI",
    authDomain: "buzplanners.firebaseapp.com",
    databaseURL: "https://buzplanners.firebaseio.com",
    projectId: "buzplanners",
    storageBucket: "buzplanners.appspot.com",
    messagingSenderId: "684788461600",
    appId: "1:684788461600:web:c58ccc8b0a3aa01300cc45",
    measurementId: "G-NE5Q9JJ2KJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
//  const db = firebase.firestore()

var db = firebase.firestore();
var storage = firebase.storage();

export {
  db,
  storage
}







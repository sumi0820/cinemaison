  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth' 
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyABy_xVfM7ugq4-0f9Hc2mU5FGpbrTTbtM",
    authDomain: "cinemaison-f1cd1.firebaseapp.com",
    databaseURL: "https://cinemaison-f1cd1.firebaseio.com",
    projectId: "cinemaison-f1cd1",
    storageBucket: "cinemaison-f1cd1.appspot.com",
    messagingSenderId: "123728569928",
    appId: "1:123728569928:web:f3bb573c6b3d9d76845a7d",
    measurementId: "G-XL5CBWVN55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();


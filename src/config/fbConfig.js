import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const API_KEY = process.env.API_KEY;
const PROJECT_ID = process.env.PROJECT_ID;
const APP_ID = process.env.APP_ID;
const MEASUREMENT_ID = process.env.MEASUREMENT_ID;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "cinemaison-f1cd1.firebaseapp.com",
  databaseURL: "https://cinemaison-f1cd1.firebaseio.com",
  projectId: PROJECT_ID,
  storageBucket: "cinemaison-f1cd1.appspot.com",
  messagingSenderId: "123728569928",
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

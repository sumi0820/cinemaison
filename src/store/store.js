//Redux
import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./reducers/index";
import thunk from "redux-thunk";
import 'firebase/database';

//Firebase
import { createFirestoreInstance, getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import fbConfig from "../config/fbConfig";
import firebase from "firebase/app";

const initialState = {};

export const store = createStore(
  combineReducers,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);



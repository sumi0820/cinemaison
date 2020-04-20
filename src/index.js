import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {store} from './store/store';
import Spinner from './components/layout/Spinner'
import { Provider } from 'react-redux';


//Redux
import 'firebase/database';
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';


//Firebase
import { createFirestoreInstance } from "redux-firestore";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}


const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) 
    return <Spinner />;
      return children
}

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
      <App />
    </AuthIsLoaded>
    </ReactReduxFirebaseProvider>

  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { combineReducers } from 'redux';
import searchReducer from '../reducers/searchReducer';
import getDetailReducer from '../reducers/getDetailReducer';
import authReducer from '../reducers/authReducer';
import reviewReducer from '../reducers/reviewReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    movies: searchReducer,
    movie: getDetailReducer,
    auth: authReducer,
    review: reviewReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})
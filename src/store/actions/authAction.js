import { LOGIN_SUCCESS, SIGNOUT_SUCCESS } from './type';
import firebase from 'firebase'


export const signIn = (status) => {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_SUCCESS,

        })

}}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({
                type: SIGNOUT_SUCCESS,
            });
        });
    }
}
import { GET_DETAIL, LOADING, ADD_FAV,REMOVE_FAV, CREATE_ERROR, } from './type';
import axios from 'axios';
import { APIKey } from '../../APIKey'


export const getDetail = id => dispatch => {
    axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&=&i=${id}`)
    .then(res => 
        dispatch({
            type: GET_DETAIL,
            payload: res.data,
            loading: false,
        })
    )
    .catch(err => console.log(err));
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}

export const addFav = () => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const movie = getState().movie.movie;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('favorites').add({
            director: movie.Director,
            imdbID: movie.imdbID,
            title: movie.Title,
            released: movie.Released,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: ADD_FAV
            })
        }).catch((err) => {
            dispatch({
                type:CREATE_ERROR,
                err: err 
            })
            })
        }
    };


export const removeFav = (docId) => {
    console.log(docId);
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        
        firestore.collection('favorites').doc(docId).delete()
        .then(() => {
          console.log('Deleted favorite')
          dispatch({ type: REMOVE_FAV });
        }).catch(err => {
          dispatch({ err });
        })
    }
}

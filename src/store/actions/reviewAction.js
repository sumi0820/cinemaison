
import { CREATE_REVIEW, CREATE_ERROR, REMOVE_REVIEW, REMOVE_ERROR } from './type';



export const createReview = (review) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.auth.displayName;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('reviews').add({
            ...review,
            authorName: profile,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type:CREATE_REVIEW,
                review: review
            })
        }).catch((err) => {
            dispatch({
                type:CREATE_ERROR,
                err: err 
            })
            })
        }
    };

export const removeReview = (docId,history) => {

    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        
        firestore.collection('reviews').doc(docId).delete()
        .then(() => {
          dispatch({ type: REMOVE_REVIEW });
        }).catch((err) => {
            dispatch({
                type:REMOVE_ERROR,
                err: err 
            })
            })
    }
}

import { CREATE_REVIEW, CREATE_ERROR, REMOVE_REVIEW, REMOVE_ERROR } from '../actions/type';


const initState = {
    reviews: []
}

const reviewReducer = (state = initState, action) => {
    switch(action.type){
        case CREATE_REVIEW:
            console.log('Created new review', action.review);
            return state;

        case CREATE_ERROR:
            console.log('Create review error', action.err);
            return state;
        
        case REMOVE_REVIEW:
            console.log('Removed review successfully'); 
            return state;
        
        case REMOVE_ERROR:
            console.log('Removed review error', action.err);
            return state;
            
        
        default:
            return state;
    };
}

export default reviewReducer;
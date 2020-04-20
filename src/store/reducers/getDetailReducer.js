import { GET_DETAIL, LOADING, ADD_FAV, REMOVE_FAV,  } from '../actions/type';


const initState = {
    movie:[],
    loading:false,
    favorite:false,
    favStatus:true
}

const getDetailReducer = (state = initState, action) => {
    switch (action.type){
        case GET_DETAIL:
            console.log('Got movie detail'); 
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
            
        case LOADING:
            console.log('Loading...'); 
            return {
                ...state,
                loading: true
            };

        case ADD_FAV:
            console.log('Added to favorite'); 
            return {
                ...state,
                favorite: true,
                favStatus: true
            };

        case REMOVE_FAV:
            console.log('Removed from favorite'); 
            return {
                ...state,
            };

        default:
            return state;
    }
}

export default getDetailReducer;
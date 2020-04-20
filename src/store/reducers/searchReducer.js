import { SEARCH_MOVIE,FETCH_MOVIES, NEXT_PAGE, PREV_PAGE, REFRESH_MOVIES } from '../actions/type';

const initState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    page: 1
}

const searchReducer = (state = initState, action) => {
    switch (action.type){
        case SEARCH_MOVIE:
            console.log('search movie');
            return {
                ...state,
                text: action.payload,
                loading: false
            };

        case FETCH_MOVIES:
            console.log('Successfully fetched movies');
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };

        case REFRESH_MOVIES:
            console.log('Successfully refreshed movies');
            return {
                ...state,
                movies: action.payload,
                loading: false
            };

        case NEXT_PAGE:
            console.log('Successfully move to new page'); 
            return {
                ...state,
                page: action.page, 
                loading: false, 
            }

        case PREV_PAGE:
            console.log('Successfully move to new page'); 
            return {
                ...state,
                page: action.page, 
                loading: false, 
            }
        
        default:
            return state;
    }
}

export default searchReducer;
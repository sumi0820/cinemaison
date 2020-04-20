
import { SEARCH_MOVIE, FETCH_MOVIES, NEXT_PAGE, PREV_PAGE, REFRESH_MOVIES } from './type';
import axios from 'axios';
import { APIKey } from '../../APIKey'


export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
};


export const fetchMovies = (text) => dispatch => {
        axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&s=${text}&page=1`)
        .then(res => 
            dispatch({
                type: FETCH_MOVIES,
                payload: res.data,
            })
        )
        .catch(err => console.log(err));
};

export const refreshMovies = (text, page) => dispatch => {
        axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&s=${text}&page=${page}`)
        .then(res => 
            dispatch({
                type: REFRESH_MOVIES,
                payload: res.data,
            })
        )
        .catch(err => console.log(err));
};


export const nextPage = (page) => dispatch => {
    dispatch({
        type: NEXT_PAGE,
        page: page + 1
    })
};

export const prevPage = (page) => dispatch => {
    dispatch({
        type: PREV_PAGE,
        page: page - 1
    })
};
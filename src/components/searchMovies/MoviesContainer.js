import React, { Component } from 'react'
import { connect } from 'react-redux';

import MovieCard from './MovieCard'
import Pagination from './Pagination'
import { fetchMovies,refreshMovies } from '../../store/actions/searchAction'


export class MoviesContainer extends Component {
    render() {

        const movieList ={
            marginTop: '15px',
            width:'100%',

        }
        
        const { movies } = this.props;

        let content = '';
        content = 
            movies.Response === 'True'
            ? movies.Search.map((movie, index) => (            
                <MovieCard key={index} movie={movie} />
              ))
            :   <div className="container-fluid">
                    <p className="text-center"> {movies.Error}</p>
                </div>;

        let pagination = '';
        pagination =
           movies.Response === 'True' 
            ? <Pagination /> 
            : null;

        return (
            <div>
                <div className="d-flex flex-row flex-wrap" style={movieList}>
                    {content}
                </div>
               {pagination}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    movies: state.movies.movies,
    page: state.movies.page
})

export default connect(mapStateToProps,{ fetchMovies, refreshMovies })(MoviesContainer)

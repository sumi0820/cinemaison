import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail, setLoading, } from '../../store/actions/getDetailAction'
import Spinner from '../layout/Spinner';
import BackButton from '../layout/BackButton';
import AddReviewButton from '../layout/AddReviewButton';
import Favorite from '../searchMovies/Favorite';
import { Redirect } from 'react-router-dom'


const detail = {
    marginTop:'25px'
}

const button = {
    marginLeft:'10px',
    marginRight:'10px',
}


export class Movie extends Component {

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
        this.props.setLoading();  
    }

    render() {
        
        const { movie, loading, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />


        let movieInfo = (           
            <div className="container">
                 <div className="row" style={detail}>
                 <div className="col-md-4 card card-body">
                     <img src={movie.Poster} className="thumbnail" alt="Poster" />
                 </div>
                 <div className="col-md-8">
                     <h2 className="mb-4">{movie.Title}</h2>
                     <ul className="list-group">
                     <li className="list-group-item">
                         <strong>Genre:</strong> {movie.Genre}
                     </li>
                     <li className="list-group-item">
                         <strong>Released:</strong> {movie.Released}
                     </li>
                     <li className="list-group-item">
                         <strong>Rated:</strong> {movie.Rated}
                     </li>
                     <li className="list-group-item">
                         <strong>IMDB Rating:</strong> {movie.imdbRating}
                     </li>
                     <li className="list-group-item">
                         <strong>Director:</strong> {movie.Director}
                     </li>
                     <li className="list-group-item">
                         <strong>Writer:</strong> {movie.Writer}
                     </li>
                     <li className="list-group-item">
                         <strong>Actors:</strong> {movie.Actors}
                     </li>
                     <li className="list-group-item">
                         <strong>About:</strong> {movie.Plot}
                     </li>
                     <li className="list-group-item">
                        <div className="d-flex flex-row ">
                            <Favorite />
                            <a
                                href={'https://www.imdb.com/title/' + movie.imdbID}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-bg mt-1"
                                style={button}
                            >
                            View on IMDB
                            </a>
                            <BackButton />
                            <AddReviewButton />

                        </div>
                     </li>
                     </ul>
                 </div>
                 </div>

                
             </div>)
             
         let content = loading ? <Spinner /> : movieInfo;
        
         return (
            <div className="d-flex justify-content-center">{content}</div>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.movie,
    loading: state.movie.loading,
    auth: state.firebase.auth

})


export default connect(mapStateToProps,{ getDetail, setLoading })(Movie)

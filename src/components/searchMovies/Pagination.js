import React, { Component } from 'react';

import { connect } from 'react-redux';
import { nextPage, prevPage, refreshMovies } from '../../store/actions/searchAction'


class Pagination extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
          this.props.refreshMovies(this.props.text, this.props.page);
        }
      }

render(){

    const button = {
        marginLeft:'10px',
        marginRight:'10px',
    }

    const { page, movies } = this.props;

    const handleNext = (e) => {
        e.preventDefault();
        this.props.nextPage(page);
        console.log(movies.totalResults, page);
        
        }

    const handlePrev = (e) => {
        e.preventDefault();
        this.props.prevPage(page); 
       　console.log(movies.totalResults, page);
        }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                 <li className="page-item">
                    {page <= 1 ? null : <button type="submit" className="btn btn-primary btn-bg mt-3" onClick={handlePrev} style={button}>Prev</button> }
                 </li>
                 <li className="page-item">
                   <button type="submit" className="btn btn-primary btn-bg mt-3"  onClick={handleNext} style={button}>Next</button>
                 </li>
                </ul>
            </nav>
        </div>
    )
}
}



const mapStateToProps = state => ({
    text: state.movies.text,
    page: state.movies.page,
    movies: state.movies.movies
})

export default connect(mapStateToProps,{ nextPage, prevPage, refreshMovies})(Pagination)


import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


//Import action
import { searchMovie, fetchMovies } from '../../store/actions/searchAction'
// import { setLoading } from '../../store/actions/getDetailAction'

import { connect } from 'react-redux';


//style
const searchbar = {
  width: '50%'
}


class SearchForm extends Component {

handleChange = (e) => {
  this.props.searchMovie(e.target.value); //Update state via redux  
};

handleSubmit = (e) => {
  e.preventDefault();
  this.props.fetchMovies(this.props.text); //Update state via redux  
  // this.props.setLoading();
  console.log(this.props.page); //Check current page
};

render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="jumbotron-fluid mt-5 text-center">
            <div className="container">
            
              <h3 className="mb-3">
                <i className="fa fa-search" /> Search for a movie ,TV series ..
              </h3>

              <form id="searchForm "  onSubmit={this.handleSubmit}>
              <div className="d-flex flex-row justify-content-center">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search Movies, TV Series ..."
                  onChange={this.handleChange}
                  style={searchbar}
                />
              </div>
                <button type="submit" className="btn btn-primary btn-bg mt-3">
                  Search
                </button>
              </form>

            </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text,   
    auth: state.firebase.auth
})

export default connect(mapStateToProps, {searchMovie, fetchMovies})(SearchForm);

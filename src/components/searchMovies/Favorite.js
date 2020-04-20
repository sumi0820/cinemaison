import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  addFav, removeFav, getDetail } from '../../store/actions/getDetailAction'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'


const button = {
    marginLeft:'10px',
    marginRight:'10px',
}

export class Favorite extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.favorites !== prevProps.favorites) {
            // console.log(this.props.favorites);
            // console.log(this.props.favorites[2].imdbID);
            // console.log(this.props.movie.imdbID); 
            // console.log(this.props.favorites[2].authorId); 
            // console.log(this.props.auth.uid);
            // console.log(this.isPresentMovie());
            console.log(this.isPresentMovie(),this.state, "componentDidUpdate");
        }}


    handleRemove = (e) => {
        e.preventDefault(); 
        this.props.removeFav(this.isDocId())
        console.log(this.isDocId(), this.state);
    }

    handleAdd = (e) => {
        e.preventDefault();
        this.props.addFav()
    }

    isPresentMovie = () => {
        const validation = this.props.favorites && this.props.favorites.filter(favorite => favorite.authorId === this.props.auth.uid).find(favorite => favorite.imdbID === this.props.movie.imdbID);
            if(validation){
            return (<button type="submit" className="btn btn-danger btn-bg mt-1" onClick={this.handleRemove} style={button}>Remove From Favorite</button>);
        } else {
            return (<button type="submit" className="btn btn-primary btn-bg mt-1" onClick={this.handleAdd} style={button}>Add To Favorite</button>);    
        }
    }

    isDocId = () => {
        const validation = this.props.favorites && this.props.favorites.filter(favorite => favorite.authorId = this.props.auth.uid).find(favorite => favorite.imdbID === this.props.movie.imdbID).id;
        if(validation){
            return validation
        }
    }

    render() {
        return (
            <div className="d-flex">
               {this.isPresentMovie()} 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    favorites: state.firestore.ordered.favorites,
    auth: state.firebase.auth,
    movie: state.movie.movie,
    favStatus: state.movie.favStatus
})


export default compose(
    connect(mapStateToProps,{ addFav, removeFav, getDetail}),
    firestoreConnect([
        { collection: 'favorites' }
    ])
)(Favorite);


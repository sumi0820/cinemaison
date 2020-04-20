import React, { Component } from 'react';
import MyReviewList from './MyReviewList'
import MyFavList from './MyFavList'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const myPage = {
    margin: '35px'
}

const header = {
    textAlign: 'center'
}

class MyPage extends Component {
    render() {
        
        const {reviews, favorites, auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="d-flex justify-content-lg-around">
                <div className="row" style={myPage}>
                    <MyReviewList reviews={reviews} auth={auth} />
                </div>
                <div className="flex-column s12 m6 float-right" style={myPage}>
                    <h3 style={header}>My Favorite Movies</h3>
                    <MyFavList favorites={favorites} auth={auth} />
                </div>
                {console.log(reviews, favorites)}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        reviews: state.firestore.ordered.reviews,
        favorites: state.firestore.ordered.favorites,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
       { collection: 'reviews', orderBy: ['createdAt', 'desc']},
       { collection: 'favorites',orderBy: ['createdAt', 'desc']}
    ])
)(MyPage);

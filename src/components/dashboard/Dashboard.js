import React, { Component } from 'react';
import Notification from './Notification'
import ReviewList from '../review/ReviewList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const dashboard = {
    margin: '35px'
}

class Dashboard extends Component {

    render() {
        const { auth, reviews,notifications } = this.props;
        return (
            <div>
                <div className="d-flex justify-content-around">
                    <div className="row" style={dashboard}>
                        <ReviewList reviews={reviews} />
                    </div>
                    <div className="flex-column s12 m6 float-right" style={dashboard}>
                        <Notification notifications={notifications} />
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        reviews: state.firestore.ordered.reviews,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'reviews', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit:5, orderBy: ['time', 'desc'] },
    ])
)(Dashboard);
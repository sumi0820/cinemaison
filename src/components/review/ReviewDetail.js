import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect,withRouter } from 'react-router-dom'
import DeleteButton from '../layout/DeleteButton'
import BackButton from '../layout/BackButton'
import moment from 'moment'

import Spinner from '../layout/Spinner'
const reviewContent = {
    fontSize:'16px'
}

const reviewFooter = {
    margin: '0px',
    fontSize:'13px'
}

const reviewStyle = {
    marginTop: '2%',
    fontSize:'13px'
}

const button = {
    marginTop: '1%',
    fontSize:'13px'
}


export class ReviewDetail extends Component {

    render() {

        const { review, auth,docId  } = this.props;

        const validation = () => {
            if(!auth.uid) return <Redirect to='/signin' />
            if(review){
                return(
                    <div className="container section review-detail" >
                        <div className="container" style={reviewStyle}>
                            <div className="card-container">
                                <h1 className="card-title">{review.title} </h1>
                                <p style={reviewContent}>{review.content}</p>
                            </div>
                                <p className="card-text" style={reviewFooter}>Posted by {review.authorName}</p>
                                <p className="card-text" style={reviewFooter}>{moment(review.createdAt.toDate()).calendar()}</p>
                        </div>
                    
                        <div className="d-flex flex-row" style={button} >
                            <BackButton />
                            <DeleteButton
                             docId={docId} review={review} auth={auth} />
                        </div>                    
                        </div>
                )
            }else{
                return (
                    <div className="container center">
                        <Spinner />
                    </div>
                    );
            }
        }

        return (
            <div>
                {validation()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const reviews = state.firestore.data.reviews;
    const review = reviews ? reviews[id] : null;
    return {
        review: review,
        reviews: reviews,
        auth: state.firebase.auth,
        docId: id
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'reviews' }
    ])
)(withRouter(ReviewDetail));


import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter,browserHistory } from 'react-router-dom'
import { removeReview } from '../../store/actions/reviewAction';

const button = {
    marginLeft:'10px',
    marginRight:'10px',
}

export class DeleteButton extends Component {


    isMyReview = () => {
        console.log(this.props.docId, this.props.review.authorId, this.props.auth.uid);
        const {docId, review, auth,} = this.props;
        if(review.authorId === auth.uid){
            return(
                <div>
                    {/* <button type="submit" className="btn btn-primary btn-bg mt-1"  style={button}>Edit</button> */}
                    <button 
                        type="submit" 
                        className="btn btn-danger btn-bg mt-1"  
                        style={button} 
                        onClick={() => {
                            this.props.removeReview(docId, this.props.history)
                            this.props.history.push('/');
                        }}
                    >Delete</button>

                </div>
            )
        }
    }


    render() {
        return (
            <div>
                {this.isMyReview()}
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        removeReview: (docId) => {
            dispatch(removeReview(docId))
        }        
    }
}

export default compose(
    connect(null, mapDispatchToProps),
    firestoreConnect([
        { collection: 'reviews' }
    ])
)(withRouter(DeleteButton));

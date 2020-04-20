import React from 'react';
import moment from 'moment'

const card = {
    marginBottom:'15px',
}

const textSetting ={
    display: "block",
    width: '500px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}


const ReviewSummary = ({review}) => {
    return (
    <div className="card" style={card}>
        <div className="card-body">
            <h3 className="card-title" style={textSetting}>{review.title}</h3>
            <h6 className="card-text" style={textSetting}>Posted by {review.authorName}</h6>
            <h6 className="card-text" style={textSetting}>{moment(review.createdAt.toDate()).calendar()}</h6>
        </div>
    </div>
    );
};

export default ReviewSummary;
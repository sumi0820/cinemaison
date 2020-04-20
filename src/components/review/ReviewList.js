import React from 'react';
import ReviewSummary from './ReviewSummary'
import { Link } from 'react-router-dom'

const header = {
    textAlign: 'center'
}

const ProjectList = ({reviews}) => {
    return (
        <div className="review-list section">
            <h3 style={header}>Reviews</h3>
            { reviews && reviews.map(review => {
                return (
                    <Link to={'/review/' + review.id} key={review.id} >
                        <ReviewSummary review={review}  />
                    </Link>
                )
            })}


        </div>
    );
};

export default ProjectList;
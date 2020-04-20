import React from 'react';
import MyReviewSum from './MyReviewSum'
import { Link } from 'react-router-dom'
import { logDOM } from '@testing-library/react';

const header = {
    textAlign: 'center'
}


const MyReviewList = ({reviews, auth}) => {
    return (
        <div className="project-list section">
        {console.log(auth)}
            { reviews && reviews.map(review => {
                if(auth.uid === review.authorId){
                return (
                    <div>
                        <h3 style={header}>My Reviews</h3>
                        <Link to={'/review/' + review.id} key={review.id} >
                          <MyReviewSum review={review} />
                        </Link>
                    </div>
                )}
            })}


        </div>
    );
};

export default MyReviewList;
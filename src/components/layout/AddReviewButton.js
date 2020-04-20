import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const button = {
    marginLeft:'10px',
    marginRight:'10px',
}

export class AddReviewButton extends Component {

    render() {
        return (
            <div> 
             <Link to='/create' >
                <button type="submit" className="btn btn-primary btn-bg mt-1" style={button}> 
                     Add Review
                </button>
                </Link>
            </div>
        )
    }
}

export default AddReviewButton

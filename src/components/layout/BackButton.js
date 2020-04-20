import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


const button = {
    marginLeft:'10px',
    marginRight:'10px',
}

export class BackButton extends Component {
    render() {
        return (
            <div>
               <button 
                type="submit" 
                className="btn btn-primary btn-bg mt-1"  
                style={button} 
                onClick={this.props.history.goBack}> 
                    Go Back
                </button>
            </div>
        )
    }
}

export default withRouter(BackButton)

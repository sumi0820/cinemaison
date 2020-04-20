import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createReview } from '../../store/actions/reviewAction';
import { Redirect } from 'react-router-dom'

const formField = {
    margin:'35px 35px 35px 35px',
    width:'100%'
}

const title = {
    fontSize: '32px'
}

const inputField = {
    margin:'15px 15px 15px 15px',
    width:'100%',
}
const textSetting = {
    whiteSpace: 'pre-wrap'
}


export class CreateReview extends Component {

    state = {
        title:'',
        content:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createReview(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container" >
   
            <form  onSubmit={this.handleSubmit} style={formField}  >
            
                <h5 style={title}>New Review</h5>

                <div className="d-flex flex-column justify-content-center" rows="3" >
                    <div className="input-field " style={inputField} >
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter title" onChange={this.handleChange} />
                    </div>

                    <div className="input-field" style={inputField}  >
                        <label htmlFor="content">Content</label>
                        <textarea type="text" className="form-control" rows="12" id='content' placeholder="content" onChange={this.handleChange} style={textSetting}/>
                    </div>
                </div>
            
                <div className="d-flex justify-content-center" >
                    <button className="btn btn-primary">Post</button>
                </div>
            
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)

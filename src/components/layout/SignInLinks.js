import React from 'react';
import { NavLink } from 'react-router-dom'
import firebase from 'firebase';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction'

const navItem ={
    marginLeft:"7px",
    marginRight:"7px"
}

const SignInLinks = (props) => {

    const handleClick = () => {
        props.signOut();
    }
    return (
    <ul className="nav">
        <li><NavLink to='/mypage' className="nav-item text-white" style={navItem}>My Page</NavLink></li>
        <li><NavLink to='/create' className="nav-item text-white" style={navItem}>New Review</NavLink></li>
        <li><NavLink to='/search' className="nav-item text-white" style={navItem}>Search Movie</NavLink></li>
        <li><NavLink to='/about' className="nav-item text-white" style={navItem}>About</NavLink></li>
        <li><NavLink to='/' className="nav-item text-white" style={navItem} onClick={handleClick}>Log Out</NavLink></li>
    </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks)


import React from 'react';
import { NavLink } from 'react-router-dom'

const navItem ={
    marginLeft:"7px",
    marginRight:"7px"
}

const SignOutLinks = () => {
    return (
    <ul className="nav">
        <li><NavLink to='/about' className="nav-item text-white" style={navItem}>About</NavLink></li>
        <li><NavLink to='/signin' className="nav-item text-white" style={navItem}>Sign in</NavLink></li>
    </ul>
    )
}

export default SignOutLinks

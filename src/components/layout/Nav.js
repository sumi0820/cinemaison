import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const nav = {
    backgroundColor:'#0890B5',
    fontSize:'20px'
}

const Nav = (props) => {
    const { auth  } = props;
    const links = auth.uid ? <SignInLinks /> : <SignOutLinks />
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top" style={nav} >
                <div className="container">
                    <div className="navbar-header">
                        <div className="navbar-left logo">
                            <Link className="navbar-brand text-white font-weight-bold brand-text" to="/">
                                    Cinemaison
                            </Link>
                        </div>
                    </div>
            <ul className="nav navbar-right justify-content-center">
                    {/* <SignInLinks />
                    <SignOutLinks /> */}
                    {links}
            </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      auth: state.firebase.auth,
    }
  }

export default connect(mapStateToProps)(Nav)

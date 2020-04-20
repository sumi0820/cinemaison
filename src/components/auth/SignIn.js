import React, { Component } from 'react'
import firebase from 'firebase';
import StyleFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


const header = {
    textAlign: 'center',
    margin: '35px'

}

export class SignIn extends Component {

    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false
          }
      };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(firebase.auth().currentUser);
        })
    }


    render() {
        const { auth } = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <h3 style={header}>Sign In</h3>
                <StyleFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignIn)

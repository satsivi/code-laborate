import React, { Component } from 'react'
import {StyledFirebaseAuth} from 'react-firebaseui'
import firebase from 'firebase'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedin',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ]
};


class Login extends Component {
  render() {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
  }
}

export default Login

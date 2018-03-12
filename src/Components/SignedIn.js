import React, { Component } from 'react'
import firebase from 'firebase'
import { Button } from 'element-react'
import 'element-theme-default'
import { Link } from 'react-router-dom'


class SignedIn extends Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.forceUpdate();
      }
    );
  }

  render() {
    console.log(firebase.auth().currentUser)
    return (
      <h1 className="home">{firebase.auth().currentUser ? <span>Welcome  {firebase.auth().currentUser.displayName} You've been signed in.</span> : <Link to="/login"><Button icon="caret-right">Log In</Button></Link> }</h1>
    );
  }
}

export default SignedIn

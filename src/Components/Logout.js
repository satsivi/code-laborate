import React, { Component } from 'react'
import firebase from 'firebase'

class Logout extends Component {
  componentDidMount(){
    firebase.auth().signOut()
  }

  render() {
    return (
      <h1 className="home">You've been logged out.</h1>
    );
  }
}

export default Logout

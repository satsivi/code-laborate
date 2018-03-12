import React, {Component} from 'react'
import Navbar from './Components/Navbar'
import Routes from './routes'
//import firebase from 'firebase'

export default class App extends Component{
  render() {
    //console.log('User ', firebase.auth().currentUser)
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}



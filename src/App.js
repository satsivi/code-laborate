import React, {Component} from 'react';
import Editor from './Components/Editor'
import Navbar from './Components/Navbar'
import Routes from './routes'

// import * as elem from 'element-react'
// console.log(elem)

export default class App extends Component{
  constructor(){
    super()
  }

// Render editor
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}



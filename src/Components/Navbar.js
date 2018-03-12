import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'element-react'
import 'element-theme-default'
import firebase from 'firebase'

export default class Navbar extends Component {
  render(){
    return (
      <Menu defaultActive="1" className="el-menu" mode="horizontal">
        <Link to="/"><Menu.Item index="1">Home</Menu.Item></Link>
        {
          !firebase.auth().currentUser ?
            <Link to="/login"><Menu.Item index="2">Log In/Sign Up</Menu.Item></Link>:
            <Link to="/logout"><Menu.Item index="2">Log out</Menu.Item></Link>
        }
      </Menu>
    )
  }
}


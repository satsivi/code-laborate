import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'element-react'
import 'element-theme-default'

export default class Navbar extends Component {
  render(){
    return (
      <Menu defaultActive="1" className="el-menu" mode="horizontal">
        <Menu.Item index="1"><Link to="/">Home</Link></Menu.Item>
      </Menu>
    )
  }
}


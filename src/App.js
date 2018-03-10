import React, {Component} from 'react';
import Editor from './Components/Editor'
import {Menu} from 'element-react'
import 'element-theme-default'

// import * as elem from 'element-react'
// console.log(elem)

export default class App extends Component{
  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(newValue) {
    console.log('change', newValue);
  }

// Render editor
  render() {
    return (
      <div>
        <Menu defaultActive="1" className="el-menu" mode="horizontal">
          <Menu.Item index="1">Home</Menu.Item>
          <Menu.Item index="2">Random</Menu.Item>
          <Menu.Item index="3">New</Menu.Item>
      </Menu>
      <Editor/>
      </div>
    )
  }
}



import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Layout } from 'element-react'
import 'element-theme-default'
import firebase from 'firebase'

export default class Navbar extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.forceUpdate();
      }
    );
  }

  render(){
    let style = {
      fontSize: "20px"
    }
    return (
      <Layout.Row flex="flex" justify="space-between">
        <Menu defaultActive="1" className="el-menu" mode="horizontal">

          <Layout.Col span="16">
            <Link to="/"><Menu.Item index="1">
              <span style={style}>
                <i className="el-icon-edit"></i>Codelaborate
              </span>
            </Menu.Item></Link>
          </Layout.Col>

          <Layout.Row type="flex" justify="end">
            <Layout.Col span="4">
              <Link to="/">
                <Menu.Item index="2">Home</Menu.Item>
              </Link>
            </Layout.Col>

            {
              !firebase.auth().currentUser ?
                <Layout.Col span="4">
                  <Link to="/login">
                    <Menu.Item index="3">Log In</Menu.Item>
                  </Link>
                </Layout.Col>:

                <Layout.Col span="4">
                  <Link to="/logout">
                    <Menu.Item index="3">Log out</Menu.Item>
                  </Link>
                </Layout.Col>
            }
          </Layout.Row>
        </Menu>
      </Layout.Row>
    )
  }
}


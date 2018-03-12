import React, { Component } from 'react'
import { Button } from 'element-react'
import 'element-theme-default'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {

  render() {
    return (
      <div>
        <h1 className="home">Error 404 ),:</h1>
        <h5 className="home">The page you are looking for does not exist.</h5>
        <div className="home"><Link to='/'><Button type="primary" icon="menu">Home</Button></Link></div>
      </div>
    );
  }
}

export default ErrorPage

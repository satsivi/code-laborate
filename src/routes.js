import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { default as Editor } from './Components/Editor'
import { default as Home } from './Components/Home'
import { default as Login } from './Components/Login'
import { default as Logout } from './Components/Logout'
import { default as ErrorPage } from './Components/ErrorPage'
class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path = "/" component= {Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/notfound" component={ErrorPage} />
        <Route path="/:id" component = {Editor} />
      </Switch>
    )
  }
}

export default Routes

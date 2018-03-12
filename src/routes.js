import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { default as Editor } from './Components/Editor'
import { default as Home } from './Components/Home'

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path = "/" component= {Home} />
        <Route path="/:id" component = {Editor} />
      </Switch>
    )
  }
}

export default Routes

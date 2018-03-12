import React, { Component } from 'react'
import { Button } from 'element-react'
import 'element-theme-default'
import fire from '../fire'
import { withRouter } from "react-router-dom"

class Home extends Component {
  constructor(){
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    let ref = fire.database().ref(`/snippet`)
    let key = ref.push().key

    fire.database().ref(`/snippet/${key}`).set({ text: '// Write some code... Together!' })

    this.props.history.push(`/${key}`)
  }

  render() {
    return (
      <div>
        <div className="home"><h1>Welcome to Codelaborate</h1></div>
        <div className="home"><h3>Code together to learn together.</h3></div>
        <div className="home"><Button type="primary" icon="plus" onClick={this.onClick}>New Codelaboration</Button></div>
      </div>
    )
  }
}

export default withRouter(Home)

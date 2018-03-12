import React, { Component } from 'react'
import { Button } from 'element-react'
import 'element-theme-default'
import fire from '../fire'
import firebase from 'firebase'
import * as generate from 'string-to-color'

class Chat extends Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      message: "",
      name: firebase.auth().currentUser.displayName
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({message: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    let messageBody = {
      name: this.state.name,
      message: this.state.message
    }

    let ref = fire.database().ref(`/snippet/${this.props.refId}/messages`)
    ref.push().set(messageBody)

    this.setState({message: ""})
    //console.log("yes")
  }

  componentDidMount(){
    // load messages
    let ref = fire.database().ref(`/snippet/${this.props.refId}/messages`)
    ref.on('value', (snap) => {
      //console.log(snap.val())

      if(snap.val()){
        let msgArr = []
        for(let key in snap.val()){
          msgArr.push({
            id: key,
            name: snap.val()[key].name,
            message: snap.val()[key].message,
            color: generate(snap.val()[key].name)
          })
        }
        this.setState({ messages: msgArr})
      }
    })

  }

  render() {
    //console.log(this.state.messages)
    return (
      <div>
        <div className="chatbox">
        {
          this.state.messages.length?<div>
          {this.state.messages.map((message) =>{
            let styles = {
              color: message.color,
              fontWeight: 'bold'
            }
            //style={{marginRight: spacing + 'em'}}
            return <div key={message.id}><span style={styles}>{message.name}</span>: {message.message}</div>
          })}
          </div> : <div>There are no messages.</div>
        }
        </div>
        <form onSubmit={this.handleSubmit} className="flexContainer">
          <textarea
          value={this.state.message}
          onChange={this.handleChange}
          className="messageBox"
          />
          <Button type="info" nativeType="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default Chat

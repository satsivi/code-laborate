import React, {Component} from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import { withRouter } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Button, Dialog } from 'element-react'

import 'element-theme-default'
import { default as Chat } from './Chat'
import 'brace/mode/javascript'
import 'brace/theme/tomorrow'
import fire from '../fire'
import firebase from 'firebase'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      refId: this.props.match.params.id,
      link: 'https://code-laborate.firebaseapp.com/'+ this.props.match.params.id,
      dialogVisible: !firebase.auth().currentUser
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(newValue) {
    this.setState({
      text: newValue
    })
    var ref = fire.database().ref(`/snippet/${this.state.refId}`)
    ref.update({text: newValue })
    // test snippet:-K2ib4H77rj0LYewF7dP
  }

  componentDidMount() {
    var ref = fire.database().ref(`/snippet/${this.state.refId}/text`)

    ref.on('value', (snap) => {
      if(snap.val() === null){
        this.props.history.push("/notfound")
      }else{
        this.setState({ text: snap.val() || '' })
      }
    })
  }

  // notification(){
  //   Notification({
  //     title: 'Please Log In',
  //     message: 'Log in to chat and edit.',
  //     type: 'warning'
  //   })
  // }
  // { !loggedIn ? <Notification title="Please Log In" message="Log in to chat and edit." type="warning" /> : <span /> }

  render(){
    console.log(Notification)
    console.log(this.state.refId)
    let loggedIn= !firebase.auth().currentUser
    return (
      <div className='editorContainer'>

        <Dialog
          title="Log In"
          visible={ this.state.dialogVisible }
          onCancel={() => this.setState({ dialogVisible: false })}
          size="tiny">
          <Dialog.Body>
            <span>Please Log in to edit and chat.</span>
          </Dialog.Body>

          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => this.setState({ dialogVisible: false })}>Cancel</Button>
            <Button type="primary" onClick={() => this.setState({ dialogVisible: false })}>Confirm</Button>
          </Dialog.Footer>
          </Dialog>

        <div className='aceContainer'>
          <AceEditor
            mode="javascript"
            theme="tomorrow"
            onChange={this.onChange}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            height="calc( 100vh - 60px )"
            width="77vw"
            focus={true}
            wrapEnabled={true}
            readOnly={loggedIn}
            defaultValue="// Write some code... Together!"
            value={this.state.text}
          />
          </div>
        <div className="sideContainer">
          <input type="text" readOnly="true" value={this.state.link} size="58" />
          <CopyToClipboard text={this.state.link}>
            <Button size="mini">Copy</Button>
          </CopyToClipboard>
          {
            loggedIn ? <div className='home'>You must be logged in to edit.</div>:
            <Chat />
          }
        </div>
    </div>
    )
  }
}

export default withRouter(Editor)

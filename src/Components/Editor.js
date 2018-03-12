import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import 'brace/mode/javascript'
import 'brace/theme/tomorrow'
import fire from '../fire'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      refId: this.props.match.params.id
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
        this.props.history.push("/")
      }else{
        this.setState({ text: snap.val() || '' })
      }
    })

  }

  render(){
    console.log(this.state.refId)
    return (
      <AceEditor
        mode="javascript"
        theme="tomorrow"
        onChange={this.onChange}
        name="editor"
        editorProps={{ $blockScrolling: true }}
        height="500px"
        width="800px"
        focus={true}
        wrapEnabled={true}
        defaultValue="// Write some code... Together!"
        value={this.state.text}
      />
    )
  }
}

export default withRouter(Editor)

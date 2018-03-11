import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import 'brace/mode/javascript'
import 'brace/theme/tomorrow'
import fire from '../fire'

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(newValue) {
    this.setState({
      text: newValue
    })
    var ref = fire.database().ref("/snippet/-K2ib4H77rj0LYewF7dP")
    ref.update({text: newValue })

  }

  componentDidMount() {
    var ref = fire.database().ref("/snippet/-K2ib4H77rj0LYewF7dP/text")

    ref.on('value', (snap) => {
      this.setState({text: snap.val()})
    })

    //ref.once('value', snap => this.setState({text: snap.val()}))
  }

  render(){
    console.log(this.state.text)
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

// const mapState = state => {
//   return {
//     snippet: state.snippet
//   }
// }

// const mapDispatch = (dispatch, ownProps) => {
//   return {
//     getSnippet() {
//       dispatch()
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Editor)

export default Editor

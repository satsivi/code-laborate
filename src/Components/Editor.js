import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import 'brace/mode/javascript'
import 'brace/theme/tomorrow'

class Editor extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(newValue) {
    console.log('change', newValue);
  }

  render(){
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
      />
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    snippet: state.snippet
  }
}



export default connect(mapState, mapDispatch)(Editor)

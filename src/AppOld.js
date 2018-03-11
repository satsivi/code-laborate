import React, { Component } from 'react';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      html: ''
    }; // <- set up react state
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  handleChange = function (event) {
    this.setState({ html: event.target.value });
  }


  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    let msgId = fire.database().ref('messages').push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear the input
  }

  render() {
    console.log(this.state)
    return (
      <Highlight language='javascript'>
      <code><ContentEditable
      html={this.state.html}
      onChange={this.handleChange}
      /></code></Highlight>
    );
  }
}

export default App;


// <Highlight language="javascript">
//   <div contentEditable="true" className="workspace">
//     <pre><code>ipsum lore</code></pre>
//   </div>
// </Highlight>


// <form onSubmit={this.addMessage.bind(this)}>
//   <input type="text" ref={el => this.inputEl = el} />
//   <input type="submit" />
//   <ul>
//     { /* Render the list of messages */
//       this.state.messages.map(message => <li key={message.id}>
//         <Highlight language='javascript'><pre><code>{message.text}</code></pre></Highlight>
//         ->{eval(message.text)}
//       </li>
//       )
//     }
//   </ul>
// </form>

import React, { Component } from 'react'
import { Button } from 'element-react'
import 'element-theme-default'
import fire from '../fire'
import firebase from 'firebase'

class Chat extends Component {
  constructor(){
    super()
    this.state = {
      messages:[]
    }
  }

  render() {
    return (
      <div>
        {/*Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Behind the couch. Meow loudly just to annoy owners stare at wall turn and meow stare at wall some more meow again continue staring howl uncontrollably for no reason. Annoy kitten brother with poking jump around on couch, meow constantly until given food, . Scream at teh bath leave fur on owners clothes if human is on laptop sit on the keyboard and intently stare at the same spot, so always hungry and eat the fat cats food. Stand in front of the computer screen. Sit on human intently stare at the same spot annoy kitten brother with poking and see owner, run in terror hide from vacuum cleaner or hide at bottom of staircase to trip human. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose stare out the window hunt by meowing loudly at 5am next to human slave food dispenser yet refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am yet scratch at the door then walk away for asdflkjaertvlkjasntvkjn (sits on keyboard).*/}
        <div className="chatbox">

        </div>
        <textarea/>
      </div>
    )
  }
}

export default Chat

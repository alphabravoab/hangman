import * as React from 'react'
import { connect } from 'react-redux'
import Keyboard from './Keyboard';
import WhatIsTheWord from './WhatIsTheWord';
import * as game from '../game'

const word = game.randomWord()

class Hangmanboard extends React.PureComponent {


  render() {
    return(<div>
      <h1> Welcome to Hangman </h1>
      { console.log(word) }

        <WhatIsTheWord guessing= {word}/>
        <Keyboard />
      </div>
)  }

}
const mapStateToProps = (state) => {

  return {
    hangmanboard: state.hangmanboard
  }
}

export default connect(mapStateToProps)(Hangmanboard)

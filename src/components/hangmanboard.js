import * as React from 'react'
import { connect } from 'react-redux'
import * as game from '../game'

import GuessCount from './GuessCount'
import { makeAGuess, restartGame } from '../actions/game'
import './WhatIsTheWord.css'
import DisplayWord from './DisplayWord';

let word = game.randomWord()


class Hangmanboard extends React.PureComponent {
  restartIt = () => {
    word= game.randomWord()

    this.props.restartGame("word")
  }
  render() {
     const guesses = game.wrongGuessCount(word, this.props.guesses )
    console.log("incase you want to cheat ",word)
    return(
      <div>
          <h1> Welcome to Hangman </h1>
            <div> <GuessCount guesses={ guesses } /> </div>
            letters guessed:   { this.props.guesses }
          <div className="birdIsTheWord">
             <DisplayWord word={ word } />
              <button onClick={this.restartIt}>change word</button>
          </div>
        
      </div>
)  }

}
const mapStateToProps = (state) => {
  return {
    guesses: state.game,
   
  }
}

const mapDispatchToProps = dispatch => {
  return {

    makeAGuess: (guess) => {
      dispatch(makeAGuess(guess))   
    },
    restartGame:(x)=>{
      dispatch(restartGame(x))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hangmanboard)

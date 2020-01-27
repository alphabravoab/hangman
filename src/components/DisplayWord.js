import * as React from 'react'
import { connect } from 'react-redux'
import * as game from '../game'
import Keyboard from './Keyboard'
import { makeAGuess, restartGame } from '../actions/game'
import './WhatIsTheWord.css'

class DisplayWord extends React.PureComponent {
  render() {
   
    return(
      <div>

        
          <div className="birdIsTheWord">
              { game.showGuess(this.props.word, this.props.guesses) }
              { game.wrongGuessLimit(this.props.word, this.props.guesses) && <div> you lost the correct word was { this.props.word }</div> }
              { game.isWinner(this.props.word, this.props.guesses) && <div> you won</div> }
              { !game.gameFinished(this.props.word, this.props.guesses) && <div> <Keyboard /></div> }
            
          </div>
        
      </div>
)  }

}
const mapStateToProps = (state) => {
  return {
    guesses: state.game,
    keyboard: state.keyboard
   
  }
}

const mapDispatchToProps = dispatch => {
  return {

    makeAGuess: (guess) => {
      dispatch(makeAGuess(guess))   
    },
    restartGame:()=>{
      dispatch(restartGame)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayWord)
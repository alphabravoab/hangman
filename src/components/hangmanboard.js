import * as React from 'react'
import { connect } from 'react-redux'
import * as game from '../game'
import Keyboard from './Keyboard'
import { bindActionCreators } from 'redux';
import { makeAGuess } from '../actions/game'
import './WhatIsTheWord.css'

const word = game.randomWord()


class Hangmanboard extends React.PureComponent {
  render() {
    return(
      <div>
          <h1> Welcome to Hangman </h1>
              { console.log(word) }

            letters guessed:   {this.props.guesses }

            <div> You have guessed wrong:  { game.wrongGuessCount(word, this.props.guesses ) } </div>
          <div className="birdIsTheWord">
              { game.showGuess(word, this.props.guesses) }
              {game.wrongGuessLimit(word, this.props.guesses) && <div> you lost</div>}
              {game.isWinner(word, this.props.guesses) && <div> you won</div>}
              {!game.gameFinished(word, this.props.guesses) && <div> <Keyboard /></div>}
              
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
function mapDispatchToProps (dispatch) {
  return bindActionCreators({makeAGuess:makeAGuess}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Hangmanboard)

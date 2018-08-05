import * as React from 'react'
import { connect } from 'react-redux'
import * as game from '../game'
import Keyboard from './Keyboard'
import GuessCount from './GuessCount'
import { bindActionCreators } from 'redux';
import { makeAGuess } from '../actions/game'
import './WhatIsTheWord.css'

const word = game.randomWord()


class Hangmanboard extends React.PureComponent {
  render() {
    const guesses= game.wrongGuessCount(word, this.props.guesses )
    return(
      <div>
          <h1> Welcome to Hangman </h1>
              { console.log(word) }

           

            <div> <GuessCount guesses={ guesses } /> </div>
            letters guessed:   {this.props.guesses }
          <div className="birdIsTheWord">
              { game.showGuess(word, this.props.guesses) }
              {game.wrongGuessLimit(word, this.props.guesses) && <div> you lost the correct word was {word}</div>}
              {game.isWinner(word, this.props.guesses) && <div> you won</div>}
              {!game.gameFinished(word, this.props.guesses) && <div> <Keyboard /></div>}
              
          </div>
        
      </div>
)  }

}
const mapStateToProps = (state) => {
  return {
    guesses: state.game,
   
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({makeAGuess:makeAGuess}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Hangmanboard)

import * as React from 'react'
import { connect } from 'react-redux'
import * as game from '../game'
import Letters from './Letters'
import { bindActionCreators } from 'redux';
import { makeAGuess } from '../actions/game'
import './WhatIsTheWord.css'

const word = game.randomWord()
const alphabet = ["a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"]

class Hangmanboard extends React.PureComponent {
  render() {
    return(
      <div>
          <h1> Welcome to Hangman </h1>
              { console.log(word) }
          <div className="birdIsTheWord">
              {(!this.props.guesses) && game.showGuess(word, '1')}
              {(this.props.guesses) && game.showGuess(word, this.props.guesses) }
          </div>
            <ul className= "Lettering">
              {alphabet.map(letter=> <Letters key= { letter }
                                      letter={ letter }
                                      onClick= {()=> this.props.makeAGuess( {letter})} /> )}
            </ul>
      </div>
)  }

}
const mapStateToProps = (state) => {
  return {
    guesses: state.game
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({makeAGuess:makeAGuess}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Hangmanboard)

import React from 'react'
import { connect } from 'react-redux'
import * as game from '../game'
import Keyboard from './Keyboard'
import './WhatIsTheWord.css'

const DisplayWord = ({word, guesses}) => {
  return(
    <div> 
        <div className="birdIsTheWord">
            { game.showGuess(word, guesses) }
            { game.wrongGuessLimit(word, guesses) && <div> you lost the correct word was { word }</div> }
            { game.isWinner(word, guesses) && <div> you won</div> }
            { !game.gameFinished(word, guesses) && <div> <Keyboard /></div> }
          
        </div>
    </div>
)
}

const mapStateToProps = (state) => {
  return {
    guesses: state.game   
  }
}

export default connect(mapStateToProps)(DisplayWord)
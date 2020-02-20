import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { makeAGuess } from '../actions/game'
import './Letters.css'

const Letters = ({key, letter, makeAGuess}) => {
  const onClick = () => {
    makeAGuess(letter)
  }
  return (
    <li key = {key}
        onClick= {onClick}
        className="Lettering"
        letter={letter} >
      {letter}
    </li>
)}


const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({makeAGuess:makeAGuess}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Letters)

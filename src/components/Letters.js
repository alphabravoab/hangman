import * as React from 'react'
import { connect } from 'react-redux'
import { makeAGuess } from '../actions/game'
import './Letters.css'



function Letters(props) {
  return (
    <li key = { props.letter }
        onClick= {props.onClick}
        className="Lettering"
        letter={ props.letter } >
      { props.letter }
    </li>
)}

const mapStateToProps = state => {
  return {
    guesses: state.game,
  }
}
export default connect(mapStateToProps, { makeAGuess })(Letters)

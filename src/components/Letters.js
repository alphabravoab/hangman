import * as React from 'react'
import './Letters.css'
import { connect } from 'react-redux'
import * as game from '../game'
import { bindActionCreators } from 'redux';
import { makeAGuess } from '../actions/game'


function Letters(props) {

  return (

    <li key = { props.letter } onClick= { props.onClick } className="Lettering" letter={ props.letter } >
      { props.letter }
    </li>
)}

const mapStateToProps = state => {
  return {
    guesses: state.guesses

  }
}
export default connect(mapStateToProps, { makeAGuess })(Letters)

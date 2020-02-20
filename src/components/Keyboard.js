import React from 'react'
import Letters from './Letters'
import { connect } from 'react-redux'

const Keyboard = ({ keyboard }) => {
    return(
    <ul className= "Lettering">
        {keyboard.map(letter=> <Letters key= {letter} letter={letter} /> )}
    </ul>
  )
}


const mapStateToProps = (state) => {
  return {
    keyboard: state.keyboard
  }
}

export default connect(mapStateToProps)(Keyboard)

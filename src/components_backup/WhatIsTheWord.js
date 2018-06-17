import * as React from 'react'
import { connect } from 'react-redux'
import *  as game from '../game'
import './WhatIsTheWord.css'
import { makeAGuess } from '../actions/game'


class WhatIsTheWord extends React.PureComponent {

  render() {
    return(
  <div className="birdIsTheWord">
      { game.showGuess(this.props.guessing, '1')}


    </div>
)  }

}
const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(WhatIsTheWord)

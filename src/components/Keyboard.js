import * as React from 'react'
import Letters from './Letters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { makeAGuess } from '../actions/game'


class Keyboard extends React.PureComponent {
  render() {
    return(
      <ul className= "Lettering">
      {this.props.keyboard.map(letter=> <Letters key= { letter }
                              letter={ letter }
                              onClick= {()=> this.props.makeAGuess( {letter})} /> )}
    </ul>
)  }

}
const mapStateToProps = (state) => {

  return {
    keyboard: state.keyboard
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({makeAGuess:makeAGuess}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

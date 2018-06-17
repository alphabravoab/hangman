import * as React from 'react'
import Letters from './Letters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { makeAGuess } from '../actions/game'


class Keyboard extends React.PureComponent {
  state = {letters:["a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"]
}


  render() {
    return(
    <ul className= "Lettering">

      {this.state.letters.map(letter=> <Letters key= { letter } letter={ letter } onClick= {()=> this.props.makeAGuess({letter})} /> )}

     </ul>
)  }

}
const mapStateToProps = (state) => {

  return {
    keyboards: state.keyboards
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({makeAGuess:makeAGuess}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

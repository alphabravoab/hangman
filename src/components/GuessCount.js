import * as React from 'react'
import { connect } from 'react-redux'
import './Letters.css'
import Image6 from '../images/image6.png'
import Image5 from '../images/image5.png'
import Image4 from '../images/image4.png'
import Image3 from '../images/image3.png'
import Image2 from '../images/image2.png'
import Image1 from '../images/image1.png'
import Image0 from '../images/image0.png'

class GuessCount extends React.PureComponent {
    render() {
  return (
    <div>
        {this.props.guesses===0 && <div><img src={Image0} /> </div> }
        {this.props.guesses===1 && <div><img src={Image1} /> </div> }
        {this.props.guesses===2 && <div><img src={Image2} /> </div> }
        {this.props.guesses===3 && <div><img src={Image3} /> </div> }
        {this.props.guesses===4 && <div><img src={Image4} /> </div> }
        {this.props.guesses===5 && <div><img src={Image5} /> </div> }
        {this.props.guesses===6 && <div><img src={Image6} /> </div> }
        You have guessed wrong:  {this.props.guesses }</div>
)}
}


export default connect()(GuessCount)
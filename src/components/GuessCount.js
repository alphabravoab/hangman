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
        {this.props.guesses===0 && <div><img className="hanged" src={Image0} alt="guess 0" /> </div> }
        {this.props.guesses===1 && <div><img className="hanged" src={Image1} alt="guess 1"/> </div> }
        {this.props.guesses===2 && <div><img className="hanged" src={Image2} alt="guess 2"/> </div> }
        {this.props.guesses===3 && <div><img className="hanged" src={Image3} alt="guess 3"/> </div> }
        {this.props.guesses===4 && <div><img className="hanged" src={Image4} alt="guess 4"/> </div> }
        {this.props.guesses===5 && <div><img className="hanged" src={Image5} alt="guess 5"/> </div> }
        {this.props.guesses===6 && <div><img className="hanged" src={Image6} alt="guess 6"/> </div> }
        You have guessed wrong:  {this.props.guesses }</div>
)}
}


export default connect()(GuessCount)
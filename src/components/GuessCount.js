import * as React from 'react'
import { connect } from 'react-redux'
import image from '../images'
import './Letters.css'

const GuessCount = ({guesses}) =>{
  return (
    <div>
      <img className="hanged" src={image[guesses]} alt={`guess ${guesses}`} />
      <div>
        You have guessed wrong:  { guesses }
        </div>
      </div>
)}



export default connect()(GuessCount)
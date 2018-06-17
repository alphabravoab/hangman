import * as React from 'react'
import { connect } from 'react-redux'

import './Letters.css'



 function Letters(props) {

  return (

    <li key = { props.letter } onClick= {props.onClick} className="Lettering" letter={ props.letter } >
      { props.letter }
    </li>
)}



export default connect()(Letters)

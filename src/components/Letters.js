import * as React from 'react'


import './Letters.css'



 export default function Letters(props) {

  return (

    <li key = { props.letter } onClick= {props.onClick} className="Lettering" letter={ props.letter } >
      { props.letter }
    </li>
)}

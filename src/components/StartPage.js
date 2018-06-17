import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'


export default class Start extends PureComponent {
  render() {
    return (

        <div>
          <h1><Link to={ `/hangman` }>START</Link></h1>
        </div>

    )}
    }

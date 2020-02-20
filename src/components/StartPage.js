import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
          <h1><Link to={ `/hangman` }>START</Link></h1>
    </div>
  )
}

export default Start

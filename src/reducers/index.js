import { combineReducers } from 'redux'
import keyboards from './keyboards'
import game from './game'

export default combineReducers({
  keyboards,
  game
})

import { GUESS_LETTER } from '../actions/game.js'

export default (state = [], action) => {
  switch (action.type) {
    case GUESS_LETTER:
      return [...state, action.payload]
    default:
      return state
  }
}

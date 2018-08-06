import { GUESS_LETTER, RESTART_GAME } from '../actions/game.js'

export default (state = [], action) => {
  switch (action.type) {
    case GUESS_LETTER:
      return [...state, action.payload]
    case RESTART_GAME:
      return []
    default:
      return state
  }
}


import { GUESS_LETTER } from '../actions/game.js'

const alphabet = ["a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"]

export default (state = alphabet, action) => {
    switch (action.type) {
      case GUESS_LETTER:
        return state.filter((test)=>test!==action.payload)
      default:
        return state
    }
  }
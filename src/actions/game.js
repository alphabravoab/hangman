export const GUESS_LETTER = 'GUESS_LETTER'
export const SET_WORD = 'SET_WORD'

export const makeAGuess = guess => {
  console.log(guess)
  return {
    type: GUESS_LETTER,
    payload: guess
  }
}

export const setWord = WORD => {
  console.log(WORD)
  return {
    type: SET_WORD,
    payload: WORD
  }
}

export const GUESS_LETTER = 'GUESS_LETTER'
export const SET_WORD = 'SET_WORD'

export const makeAGuess = guess => {
  console.log(guess)
  return {
    type: GUESS_LETTER,
    payload: guess.letter
  }
}

export const setWord = setWord => {
  console.log(setWord)
  return {
    type: SET_WORD,
    payload: setWord
  }
}

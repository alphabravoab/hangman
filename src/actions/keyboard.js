export const GUESS_LETTER = 'GUESS_LETTER'


export const makeAGuess = guess => {
  console.log(guess)
  return {
    type: GUESS_LETTER,
    payload: guess.letter
  }
}
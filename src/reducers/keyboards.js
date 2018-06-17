export default (state = initialState, action = {}) => {
  switch (action.type){
    case "SET_ABC":
      return action.payload
    default:
      return state

  }

}

const initialState = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

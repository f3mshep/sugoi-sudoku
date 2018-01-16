var cloneDeep = require("clone-deep");

export function changeBoard(outter, inner, value, board){
  let copy = cloneDeep(board)
  debugger
  copy[outter][inner] = value
  debugger
  return {type: "UPDATE_BOARD", current_board: copy}
}

export function resetBoard(){
  return {type: "RESET_BOARD"}
}

export function toggleInput(){
  return {type: "TOGGLE_INPUT"}
}

export function changeBoard(outter, inner, value, board){
  board[outter][inner] = value
  return {type: "CHANGE_CELL", current_board: board}
}
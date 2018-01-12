export function changeBoard(outter, inner, value, board){
  board[outter][inner] = value
  debugger
  return {type: "CHANGE_CELL", current_board: board}
}
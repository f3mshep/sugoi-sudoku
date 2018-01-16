export function changeBoard(outter, inner, value, board){
  board[outter][inner] = value
  return {type: "UPDATE_BOARD", current_board: board}
}

export function resetBoard(initial_board){
  return {type: "UPDATE_BOARD", current_board: initial_board}
}

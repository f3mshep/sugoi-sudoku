export function changeBoard(outter, inner, value, board){
  board[outter][inner] = value
  return {type: "UPDATE_BOARD", current_board: board}
}

export function resetBoard(){
  return {type: "RESET_BOARD"}
}

const EMPTY_BOARD =   [[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0]];

export default function gameReducer(state={loading: false, showInput: false, game: {id: null, initial_board: EMPTY_BOARD, current_board: EMPTY_BOARD}}, action){
  switch (action.type){
    case 'LOADING_GAME':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_NEW_GAME':
      return Object.assign({}, state, {game: action.payload})
    case 'CHANGE_CELL':
      return Object.assign({}, state, {current_board: action.current_board})
    case 'TOGGLE_INPUT':
      return Object.assign({}, state, { showInput: !state.showInput === true });
    default:
      return state
  }
}
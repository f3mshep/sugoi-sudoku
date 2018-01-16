const EMPTY_BOARD =   [[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0]];

export default function gameReducer(state={loading: false, savedGames:[], game: {id: null, initial_board: EMPTY_BOARD, current_board: EMPTY_BOARD}}, action){
  switch (action.type){
    case 'LOADING_GAME':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_NEW_GAME':
      return Object.assign({}, state, {game: action.payload}, {loading: false})
    case 'CHANGE_CELL':
      return Object.assign({}, state, {game: Object.assign({}, state.game, {current_board: action.current_board}) })
    case 'LIST_GAMES':
      return Object.assign({}, state, {savedGames: action.payload }, { loading: false })
    case 'LOAD_GAME':
      debugger
      return Object.assign({}, state, {game: Object.assign({}, state.game, {current_board: action.current_board}) })
    case 'SAVE_GAME':
      return Object.assign({}, state, {loading: false}, { game: Object.assign({}, state.game, {id: action.id}) });
    default:
      return state
  }

}
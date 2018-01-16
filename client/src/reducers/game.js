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
  debugger
  switch (action.type){
    case 'LOADING_GAME':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_NEW_GAME':
      return Object.assign({}, state, {game: action.payload}, {loading: false})
    case 'UPDATE_BOARD':
      return Object.assign({}, state, { game: Object.assign({}, state.game, { current_board: action.current_board }) })
    case 'LIST_GAMES':
      return Object.assign({}, state, {savedGames: action.payload }, { loading: false })
    case 'LOAD_GAME':
      return Object.assign({}, state, {loading: false},
        {game: Object.assign({}, action.payload) })
    case 'SAVE_GAME':
      return Object.assign({}, state, {loading: false}, { game: Object.assign({}, state.game, {id: action.id}) });
    case 'RESET_BOARD':
        return Object.assign({}, state, {game: Object.assign({}, state.game, {current_board: state.game.initial_board} )})
    default:
      return state
  }

}
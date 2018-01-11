export default function gameReducer(state={loading: false, game: []}, action){
  switch (action.type){
    case 'LOADING_GAME':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_NEW_GAME':
      return Object.assign({}, state, {game: action.payload})
    default:
      return state
  }
}
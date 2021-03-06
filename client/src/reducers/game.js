const EMPTY_BOARD =
[[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0]];

const INITIAL_GAME = {
    id: null,
    difficulty: "",
    solution: EMPTY_BOARD,
    initial_board: EMPTY_BOARD,
    current_board: EMPTY_BOARD }



export default function gameReducer(state = {
  loading: false,
  locked: false,
  isWon: false,
  savedGames: [],
  game: INITIAL_GAME },
    action)
    {
      switch (action.type) {
        case "LOADING_GAME":
          return Object.assign({}, state, {loading: true, locked: false, isWon: false}, {game: INITIAL_GAME});
        case "FETCH_NEW_GAME":
          return Object.assign({}, state, { game: action.payload }, { loading: false, isWon: false });
        case "UPDATE_BOARD":
          return Object.assign({}, state, {
            game: Object.assign({}, state.game, {
              current_board: action.current_board
            })
          });
        case "ADD_SOLUTION":
          return Object.assign({}, state, {game: Object.assign({}, state.game, {solution: action.payload})})
        case "SHOW_SOLUTION":
          return Object.assign({}, state, {locked: true}, {game: Object.assign({}, state.game, {current_board: state.game.solution})})
        case "LIST_GAMES":
          return Object.assign({}, state, { savedGames: action.payload }, { loading: false });
        case "LOAD_GAME":
          return Object.assign({}, state, { loading: false, isWon: false }, { game: Object.assign({}, action.payload) });
        case "SAVE_GAME":
          return Object.assign({}, state, { loading: false }, { game: Object.assign(
                {},
                state.game,
                { id: action.payload.id },
                { time_created: action.payload.time_created }
              ) });
        case "RESET_BOARD":
          return Object.assign({}, state, {locked: false, isWon: false}, {
            game: Object.assign({}, state.game, {
              current_board: state.game.initial_board
            })
          });
        case "GAME_WON":
          return Object.assign({}, state, {isWon: true, locked: true})
        default:
          return state;
      }
    }
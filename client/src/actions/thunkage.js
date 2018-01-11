import fetch  from 'isomorphic-fetch'

export function fetchGame(level){
  return function(dispatch){
    dispatch({type: 'LOADING_GAME'})
    return fetch(`/games/new?difficulty=${level}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(game => {
        console.log(game);
        dispatch({ type: "FETCH_NEW_GAME", payload: game.data.attributes});
      });
  }
}


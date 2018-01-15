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
        dispatch({ type: "FETCH_NEW_GAME", payload: game});
      });
  }
}

export function saveGame(gamePayload){
  return function(dispatch){
    dispatch({ type: "LOADING_GAME" });
    if(gamePayload.id){
        return fetch("/games/" + gamePayload.id, {method: "PUT", body: gamePayload })
          .then(response => response.json())
          .then(game => {
            console.log(game);
            dispatch({type: "SAVE_GAME", id: game.id});
          });
    }
    else{
      return fetch("/games", { method: "POST", body: gamePayload })
        .then(response => response.json())
        .then(game => {
          console.log(game);
          dispatch({ type: "SAVE_GAME", id: game.id });
        });
    }
  }
}

export function listSavedGames(){
  return function(dispatch){
    dispatch({ type: "LOADING_GAME" });
    return fetch("/games")
    .then(response => response.json())
    .then(games =>
      dispatch({type: "LIST_GAMES", payload: games})
    )
  }
}

export function checkGame(){

}

export function loadGame(gameId){
  return function(dispatch){
    dispatch({ type: "LOADING_GAME" });
    return fetch("/games/" + gameId)
    .then(response => response.json())
    .then(game => dispatch({type: "LOAD_GAME", payload: game}) )
  }
}
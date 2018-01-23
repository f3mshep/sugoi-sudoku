import fetch  from 'isomorphic-fetch'

export function fetchGame(level){
  return function(dispatch){
    dispatch({type: 'LOADING_GAME'})
    return fetch(`/games/new?difficulty=${level}`, {
      accept: "application/json"
    })
      .then(response => response.json())
      .then(game => {
        dispatch({ type: "FETCH_NEW_GAME", payload: game});
      });
  }
}

function saveGame(gamePayload){
  return function(dispatch){
    if(gamePayload.id){
        return fetch("/games/" + gamePayload.id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ game: gamePayload })
        })
          .then(response => response.json())
          .then(game => {
            dispatch({ type: "SAVE_GAME", payload: game });
          });
    }
    else{
      return fetch("/games", { method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({game: gamePayload})
       })
        .then(response => response.json())
        .then(game => {
          dispatch({ type: "SAVE_GAME", payload: game });
        });
    }
  }
}

export function saveAndList(gamePayload) {
  //Dan Abromav is my hero.
  return function(dispatch) {
    return dispatch(saveGame(gamePayload))
      .then(()=>dispatch(listSavedGames()))
  };
}

export function listSavedGames(){
  return function(dispatch){
    return fetch("/games")
    .then(response => response.json())
    .then(games =>{
      dispatch({type: "LIST_GAMES", payload: games})
    })
  }
}

export function checkGame(gamePayload){
  return function(dispatch){
    return fetch("/check", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ game: gamePayload })
        })
    .then(response => response.json())
    .then(game => dispatch({type: "ADD_SOLUTION", payload: game.solution}))
  }
}

export function loadGame(gameId){
  return function(dispatch){
    dispatch({ type: "LOADING_GAME" });
    return fetch("/games/" + gameId)
    .then(response => response.json())
    .then(game => dispatch({type: "LOAD_GAME", payload: game}) )
  }
}
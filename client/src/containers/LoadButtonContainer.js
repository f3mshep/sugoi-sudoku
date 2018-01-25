import React from 'react'
import { connect } from "react-redux";
import DropdownLink from '../components/DropdownLink'
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { loadGame } from "../actions/thunkage"

class LoadButtonContainer extends React.Component{
  //Handles passing saved games down to dropdown menu component

  loadGame(id) {
    this.props.actions.loadGame(id)
  }

  showGames(){
    return this.props.savedGames.map(
      (game,index) =>
      <DropdownLink key={index} id={game.id} callback={this.loadGame.bind(this)} value={game.time_created} path={`/sudoku/${game.id}`}/>)
  }

  render(){

    return <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle">Load Game</button>
        <div className="dropdown-content">
          {this.showGames()}
        </div>
      </div>;
  }
}

const mapStateToProps = (state) =>{
  return {
    savedGames: state.game.savedGames
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadGame:bindActionCreators(loadGame, dispatch)
    }
  }
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadButtonContainer))

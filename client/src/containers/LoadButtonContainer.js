import React from 'react'
import { connect } from "react-redux";
import DropdownLink from '../components/DropdownLink'
import { withRouter } from "react-router-dom";

class LoadButtonContainer extends React.Component{

  showGames(){
    return this.props.savedGames.map(
      (game,index) =>
      <DropdownLink key={index} value={game.time_created} path={`/sudoku/${game.id}`}/>)
  }

  render(){

    return <div onMouseEnter={this.props.callback} className="dropdown">
        <button className="btn btn-secondary dropdown-toggle">Load Game</button>
        <div className="dropdown-content">
          {this.showGames()}
        </div>
      </div>;
  }
}

function mapStateToProps(state){
  return {
    savedGames: state.game.savedGames
  }
}

export default  withRouter(connect(mapStateToProps)(LoadButtonContainer))

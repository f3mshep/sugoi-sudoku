import React from 'react'
import { connect } from "react-redux";
import DropdownLink from '../components/DropdownLink'
import { withRouter } from "react-router-dom";

class LoadButtonContainer extends React.Component{

  showGames(){
    return this.props.savedGames.slice(1).slice(-5).map(
      (game,index) => <DropdownLink key={index}
      value={game.time_created} path={`/sudoku/${game.id}`}/>)
  }

  render(){

    return <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle">Dropdown</button>
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

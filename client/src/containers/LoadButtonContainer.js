import React from 'react'
import { connect } from "react-redux";
import DropdownLink from '../components/DropdownLink'


class LoadButtonContainer extends React.Component{

  showGames(){
    return this.props.savedGames.slice(1).slice(-5).map(game => <DropdownLink value={game.time_created} path={`sudoku/${game.id}`}/>)
  }

  render(){

    return <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle">Dropdown</button>
        <div class="dropdown-content">
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

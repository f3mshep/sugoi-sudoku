import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/thunkage";
import UserButton from '../components/UserButton'

class UserButtons extends React.Component{

  saveGame(){
    this.props.actions.saveAndList(this.props.game)
  }

  loadGame(){
    this.props.actions.loadGame(this.props.savedGames.length - 1)
  }

  resetGame(){

  }

  componentDidMount(){
    this.props.actions.listSavedGames()
  }

  render(){
    return <div className="btn-group" role="group" aria-label="Basic example">
      <UserButton callback={this.saveGame.bind(this)} value={'Save'}/>
      <UserButton callback={this.loadGame.bind(this)} value={'Load'}/>
      <UserButton callback={this.resetGame.bind(this)} value={'Reset'}/>
    </div>;
  }

}

function mapStateToProps(state) {
  return { game: state.game.game, savedGames: state.game.savedGames };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserButtons)
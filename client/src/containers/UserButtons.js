import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as thunkActions from "../actions/thunkage";
import * as inputActions from "../actions/input"
import UserButton from '../components/UserButton'

class UserButtons extends React.Component{

  saveGame(){
    this.props.actions.thunkActions.saveAndList(this.props.game)
  }

  loadGame(){
    // TODO: Display a list of most recent saved games by date, use bootstrap
    // list button https://v4-alpha.getbootstrap.com/components/button-group/
    const lastGame = this.props.savedGames[this.props.savedGames.length - 1];
    this.props.actions.thunkActions.loadGame(lastGame.id)
  }

  resetBoard(){
    this.props.actions.inputActions.resetBoard()
  }

  componentDidMount(){
    this.props.actions.thunkActions.listSavedGames()
  }

  render(){
    return <div className="btn-group" role="group" aria-label="Basic example">
      <UserButton callback={this.saveGame.bind(this)} value={'Save'}/>
      <UserButton callback={this.loadGame.bind(this)} value={'Load'}/>
      <UserButton callback={this.resetBoard.bind(this)} value={'Reset'}/>
    </div>;
  }

}

function mapStateToProps(state) {
  return { game: state.game.game, savedGames: state.game.savedGames };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      thunkActions: bindActionCreators(thunkActions, dispatch),
      inputActions: bindActionCreators(inputActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserButtons)
import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/thunkage";
import UserButton from '../components/UserButton'

class UserButtons extends React.Component{

  saveGame(){
    this.props.actions.saveGame(this.props.game)
  }

  loadGame(){

  }

  resetGame(){

  }

  render(){
    return null;
  }

}

function mapStateToProps(state) {
  return { game: state.game.game };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserButtons)
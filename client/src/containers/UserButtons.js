import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as thunkActions from "../actions/thunkage";
import * as inputActions from "../actions/input"
import UserButton from '../components/UserButton'
import LoadButtonContainer from './LoadButtonContainer';
import { withRouter } from "react-router-dom";
import SaveAlert from "../components/SaveAlert"

class UserButtons extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      alert: false
    }
  }

  disableAlert(){
    this.setState({alert:false})
  }

  saveGame(event){
    this.setState({alert:true})
    this.props.actions.thunkActions.saveAndList(this.props.game)
  }

  loadList(){
    this.props.actions.thunkActions.listSavedGames()
  }

  resetBoard(){
    this.props.actions.inputActions.resetBoard()
  }

  componentDidMount(){
    this.props.actions.thunkActions.listSavedGames()
  }

  render(){
    return <div className="btn-group thicc" role="group" aria-label="Basic example">
        <SaveAlert disableAlert={this.disableAlert.bind(this)} alert={this.state.alert} />
        <UserButton callback={this.saveGame.bind(this)} value={"Save Game"} />
        <UserButton callback={this.resetBoard.bind(this)} value={"Reset Game"} />
        {/* <UserButton callback={this.loadGame.bind(this)} value={'Load'}/> */}
        <UserButton value={"Show Solution"} />
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

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(UserButtons))
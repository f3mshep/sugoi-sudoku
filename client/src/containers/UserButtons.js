import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as thunkActions from "../actions/thunkage";
import * as inputActions from "../actions/input"
import UserButton from '../components/UserButton'
import { withRouter } from "react-router-dom";
import SaveAlert from "../components/SaveAlert"

class UserButtons extends React.Component{
  //Smart Component that controls user interface below board.
  //Passes save, reset, and show solution functions to 'dumb' components
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

  showSolution(recursionCount){
    //if solution doesn't exist yet, call itself after waiting 10 ms
    //watch performance on heroku, consider re-write
    const that = this
    ++recursionCount
    if (recursionCount > 10){
      this.props.actions.thunkActions.checkGame(this.props.game)
      recursionCount = 0
    }
    if (this.props.game.solution.length > 1){
      this.props.actions.inputActions.showSolution()
      return true
    }
    else {
      setTimeout(that.showSolution.bind(that, recursionCount), 10)
    }
  }

  componentDidMount(){
    this.props.actions.thunkActions.listSavedGames()
  }

  render(){
    return <div className="btn-group thicc" role="group" aria-label="Basic example">
        <SaveAlert disableAlert={this.disableAlert.bind(this)} alert={this.state.alert} />
        <UserButton callback={this.saveGame.bind(this)} value={"Save Game"} />
        <UserButton callback={this.resetBoard.bind(this)} value={"Reset Game"} />
        <UserButton callback={this.showSolution.bind(this, 0)} value={"Show Solution"} />
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
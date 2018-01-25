import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as thunkActions from "../actions/thunkage";
import * as inputActions from "../actions/input"
import UserButton from '../components/UserButton'
import { withRouter } from "react-router-dom";
import SaveAlert from "../components/SaveAlert"

const DISABLED = "btn btn-secondary disabled"
const ENABLED = "btn btn-secondary"

class UserButtons extends React.Component{
  //Smart Component that controls user interface below board.
  //Passes save, reset, and show solution functions to 'dumb' components
  constructor(props){
    super(props)

    this.state = {
      alert: false,
      solutionStatus: DISABLED
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
    //failsafe so that if user removes disabled class, they won' cause an error
    if (this.props.game.solution.length > 1){
      this.props.actions.inputActions.showSolution()
    }
  }

  solutionActive(nextProps){
    if (nextProps.game.solution.length > 1){
      this.setState({solutionStatus: ENABLED})
    }
    else {
      this.setState({solutionStatus: DISABLED})
    }
  }

  componentDidMount(){
    this.props.actions.thunkActions.listSavedGames()
  }

  componentWillReceiveProps(nextProps){
    this.solutionActive(nextProps)
  }

  render(){
    return <div className="btn-group thicc" role="group" aria-label="Basic example">
        <SaveAlert disableAlert={this.disableAlert.bind(this)} alert={this.state.alert} />
        <UserButton buttonClass={ENABLED} callback={this.saveGame.bind(this)} value={"Save Game"} />
        <UserButton buttonClass={ENABLED} callback={this.resetBoard.bind(this)} value={"Reset Game"} />
        <UserButton buttonClass={this.state.solutionStatus} callback={this.showSolution.bind(this, 0)} value={"Show Solution"} />
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
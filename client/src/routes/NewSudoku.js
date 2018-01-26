import React, { Component } from "react";
import SudokuBoard from "../components/SudokuBoard"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame, loadGame, checkGame } from "../actions/thunkage";
import { withRouter } from "react-router-dom";
import NavBar from '../components/NavBar'
import LoadButtonContainer from "../containers/LoadButtonContainer"
import SudokuGlobal from '../containers/SudokuGlobal'
// import * as actions from './actions/thunkage'

class NewSudoku extends Component {
  componentDidMount() {
    const that = this
    this.props.actions.fetchGame(this.props.difficulty)
    .then(()=>that.fetchSolution())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.difficulty !== this.props.difficulty) {
      this.props.actions.fetchGame(nextProps.difficulty);
    }
    this.fetchSolution(nextProps)
  }

  render() {
    return <div>
      <NavBar value={<LoadButtonContainer />} />
      <SudokuGlobal/>
      <SudokuBoard game={this.props.game}/>
    </div>;
  }

  fetchSolution(nextProps){
    //lol null comparison wtf actually.
    //code was this.props.game.solution === null
    const props = nextProps || this.props
    if (props.game.solution.length < 1) {
      props.actions.checkGame(props.game);
    }
  }

}

function mapStateToProps(state, ownProps) {
  return {
    game: state.game.game,
    difficulty: ownProps.match.params.difficulty
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadGame: bindActionCreators(loadGame, dispatch),
      fetchGame: bindActionCreators(fetchGame, dispatch),
      checkGame: bindActionCreators(checkGame, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewSudoku));

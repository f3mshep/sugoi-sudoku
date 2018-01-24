import React, { Component } from "react";
import SudokuBoard from "../components/SudokuBoard"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame, loadGame, checkGame } from "../actions/thunkage";
import { withRouter } from "react-router-dom";
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
  }

  render() {
    this.fetchSolution()
    return <SudokuBoard game={this.props.game}/>;
  }

  fetchSolution(){
    //lol null comparison wtf actually.
    //code was this.props.game.solution === null
    if (this.props.game.solution.length < 1) {
      debugger
      this.props.actions.checkGame(this.props.game);
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

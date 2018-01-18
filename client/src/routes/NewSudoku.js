import React, { Component } from "react";
import SudokuBoard from "../components/SudokuBoard"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame, loadGame } from "../actions/thunkage";
import { withRouter, Route } from "react-router-dom";
// import * as actions from './actions/thunkage'

class NewSudoku extends Component {
  componentDidMount() {
    debugger
    this.props.actions.fetchGame(this.props.difficulty);
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.difficulty !== this.props.difficulty) {
      this.props.actions.fetchGame(nextProps.difficulty);
    }
  }

  render() {
    debugger
    return <SudokuBoard game={this.props.game}/>;
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
      fetchGame: bindActionCreators(fetchGame, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewSudoku));

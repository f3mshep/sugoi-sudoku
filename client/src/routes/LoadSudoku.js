import React, { Component } from "react";
import TableRow from "../components/TableRow";
import UserButtons from "../containers/UserButtons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame } from "../actions/thunkage";
import { loadGame } from "../actions/thunkage";
import DifficultyBar from "../containers/DifficultyBar";
import { withRouter, Route } from "react-router-dom";
// import * as actions from './actions/thunkage'

class Sudoku extends Component {
  componentDidMount() {
    if (this.props.id) {
      this.props.actions.loadGame(this.props.id);
    } else {
      this.props.actions.fetchGame(this.props.difficulty);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.difficulty !== this.props.difficulty) {
      this.props.actions.fetchGame(nextProps.difficulty);
    }
  }

  render() {
    debugger
      return <p>wtf</p>
  }
}

function mapStateToProps(state, ownProps) {
  if (ownProps.match.params.id) {
    return { game: state.game.game, id: ownProps.match.params.id };
  } else {
    return {
      game: state.game.game,
      difficulty: ownProps.match.params.difficulty
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadGame: bindActionCreators(loadGame, dispatch),
      fetchGame: bindActionCreators(fetchGame, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sudoku));

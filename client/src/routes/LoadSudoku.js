import React, { Component } from "react";
import SudokuBoard from "../components/SudokuBoard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame, loadGame } from "../actions/thunkage";
import { withRouter } from "react-router-dom";


class Sudoku extends Component {
  componentDidMount() {
    this.props.actions.loadGame(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.actions.loadGame(this.props.id);
    }
  }

  render() {
    console.log('load path')
    return <SudokuBoard game={this.props.game} />
  }
}

function mapStateToProps(state, ownProps) {
  return { game: state.game.game, id: ownProps.match.params.id };
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

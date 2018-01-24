import React, { Component } from "react";
import SudokuBoard from "../components/SudokuBoard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame, loadGame } from "../actions/thunkage";
import { withRouter } from "react-router-dom";
import NavBar from '../components/NavBar'
import LoadButtonContainer from "../containers/LoadButtonContainer"

class LoadSudoku extends Component {
  componentDidMount() {
    this.props.actions.loadGame(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.actions.loadGame(nextProps.id);
    }
  }

  render() {
    return <div>
      <NavBar value={<LoadButtonContainer/>}/>
      <SudokuBoard game={this.props.game} />
    </div>;
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadSudoku));

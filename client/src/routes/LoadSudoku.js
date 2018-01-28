import React, { Component } from "react";
import SudokuBoard from "../components/SudokuBoard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame, loadGame, checkGame } from "../actions/thunkage";
import { withRouter } from "react-router-dom";
import SudokuGlobal from '../containers/SudokuGlobal'
import NavBar from '../components/NavBar'
import LoadButtonContainer from "../containers/LoadButtonContainer"

class LoadSudoku extends Component {

  fetchSolution(nextProps) {
    //lol null comparison wtf actually.
    //code was this.props.game.solution === null
    const props = nextProps || this.props
    if (props.game.solution.length < 1) {
      props.actions.checkGame(props.game);
    }
  }

  componentDidMount() {
    const that = this
    this.props.actions.loadGame(this.props.id)
    .then(() => that.fetchSolution())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.actions.loadGame(nextProps.id);
    }
    this.fetchSolution(nextProps)
  }

  render() {
    return <div>
      <NavBar value={<LoadButtonContainer/>}/>
      <SudokuGlobal />
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
      fetchGame: bindActionCreators(fetchGame, dispatch),
      checkGame: bindActionCreators(checkGame, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadSudoku));

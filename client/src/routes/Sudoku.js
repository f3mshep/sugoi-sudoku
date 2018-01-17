import React, { Component } from 'react';
import TableRow from '../components/TableRow'
import UserButtons from '../containers/UserButtons'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame } from '../actions/thunkage'
import DifficultyBar from '../containers/DifficultyBar'
// import * as actions from './actions/thunkage'


class Sudoku extends Component {

  componentDidMount(){
    this.props.fetchGame(this.props.difficulty)
  }

  render() {
    return <div className="container boop">
        <div className="row justify-content-center">
            <DifficultyBar difficulty={this.props.difficulty} />
        </div>
        <div className="row top-buffer justify-content-center h-100">
          <div className="subtle-shadow">
            <table className="sudoku-grid my-auto">
              <tbody>
                <TableRow coordinates={{ x: null, y: 1 }} clues={this.props.game.initial_board.slice(0, 3)} row={this.props.game.current_board.slice(0, 3)} />
                <TableRow coordinates={{ x: null, y: 2 }} clues={this.props.game.initial_board.slice(3, 6)} row={this.props.game.current_board.slice(3, 6)} />
                <TableRow coordinates={{ x: null, y: 3 }} clues={this.props.game.initial_board.slice(6)} row={this.props.game.current_board.slice(6)} />
              </tbody>
            </table>
          </div>
        </div>
        <div className="row top-buffer justify-content-center">
          <UserButtons />
        </div>
      </div>;
  }
}

function mapStateToProps(state, ownProps){
  debugger
  return {
    game: state.game.game,
    difficulty: ownProps.match.params.difficulty
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku)

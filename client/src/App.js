import React, { Component } from 'react';
import TableRow from './components/TableRow'
import UserButtons from './containers/UserButtons'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGame } from './actions/thunkage'
// import * as actions from './actions/thunkage'


class App extends Component {

  componentDidMount(){
    this.props.fetchGame('easy')
  }

  render() {
    debugger
    return <div className="container boop">
        <div className="row justify-content-center h-100">
          <table className="sudoku-grid my-auto">
            <tbody>
              <TableRow coordinates={{x:null, y:1}} clues={this.props.game.initial_board.slice(0, 3)} row={this.props.game.current_board.slice(0, 3)} />
              <TableRow coordinates={{x:null, y:2}} clues={this.props.game.initial_board.slice(3, 6)} row={this.props.game.current_board.slice(3, 6)} />
              <TableRow coordinates={{x:null, y:3}} clues={this.props.game.initial_board.slice(6)} row={this.props.game.current_board.slice(6)} />
            </tbody>
          </table>
        </div>
        <div className="row justify-content-center">
          <UserButtons />
        </div>
      </div>;
  }
}

function mapStateToProps(state){
  return {game: state.game.game}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

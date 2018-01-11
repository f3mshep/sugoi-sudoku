import React, { Component } from 'react';
import TableRow from './components/TableRow'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/thunkage'
import OverlayClick from "./components/InputPopover";



const TOP=1
const MID=2
const BOT=3


class App extends Component {

  componentDidMount(){
    this.props.actions.fetchGame('easy')
  }

  render() {
    return <div className="container boop">
        <div className="row justify-content-center h-100">
          <table className="sudoku-grid my-auto">
            <tbody>
              <TableRow location={TOP} clues={this.props.game.initial_board.slice(0, 3)} row={this.props.game.current_board.slice(0, 3)} />
              <TableRow location={MID} clues={this.props.game.initial_board.slice(3, 6)} row={this.props.game.current_board.slice(3, 6)} />
              <TableRow location={BOT} clues={this.props.game.initial_board.slice(6)} row={this.props.game.current_board.slice(6)} />
            </tbody>
          </table>
        </div>
      </div>;
  }
}

function mapStateToProps(state){
  return {game: state.game.game}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

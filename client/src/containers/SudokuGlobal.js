import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import WinnerModal from '../components/WinnerModal'
import { fetchGame } from '../actions/thunkage'

class SudokuGlobal extends React.Component{
  // Pushes changes in store to view. If game is won, displays a won dialoge,
  // will also manage the logic of a timer.

  render(){
    return <WinnerModal fetchGame={this.props.actions.fetchGame.bind(this, this.props.game.difficulty)} />
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game.game,
    locked: state.game.locked
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({actions: {
      fetchGame: bindActionCreators(fetchGame, dispatch)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SudokuGlobal)
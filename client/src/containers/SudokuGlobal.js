import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import ReactModal from '../components/ReactModal'
import { gameIsWon } from '../actions/input'
import { fetchGame } from '../actions/thunkage'

class SudokuGlobal extends React.Component{
  // Pushes changes in store to view. If game is won, displays a won dialoge,
  // will also manage the logic of a timer.

  isDeeplyEqual(leftObj, rightObj){
    return JSON.stringify(leftObj) === JSON.stringify(rightObj)
  }

  isGameWon(nextProps){
    if ( this.isDeeplyEqual(nextProps.game.current_board, nextProps.game.solution) && !nextProps.locked) {
      console.log('checkmate atheists')
      this.props.actions.gameIsWon()
    }
  }

  componentWillReceiveProps(nextProps){
    this.isGameWon(nextProps)
  }

  render(){
    return <ReactModal fetchGame={this.props.actions.fetchGame.bind(this, this.props.game.difficulty)} isWon={this.props.isWon} />
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game.game,
    locked: state.game.locked,
    isWon: state.game.isWon
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({actions: {
      gameIsWon: bindActionCreators(gameIsWon, dispatch),
      fetchGame: bindActionCreators(fetchGame, dispatch)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SudokuGlobal)
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import WinComponent from '../components/WinComponent'
import { gameIsWon } from '../actions/input'

class SudokuGlobal extends React.Component{

  isDeeplyEqual(leftObj, rightObj){
    return JSON.stringify(leftObj) === JSON.stringify(rightObj)
  }

  isGameWon(nextProps){
    debugger
    if ( this.isDeeplyEqual(nextProps.game.current_board, nextProps.game.solution)
    && !nextProps.locked ) {
      console.log('checkmate atheists')
      this.props.actions.gameIsWon()
    }
  }

  componentWillReceiveProps(nextProps){
    this.isGameWon(nextProps)
  }

  render(){
    const winComponent = this.props.isWon? <WinComponent key={1} /> : null
    return winComponent
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
  return ({actions:
    {gameIsWon: bindActionCreators(gameIsWon, dispatch)}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SudokuGlobal)
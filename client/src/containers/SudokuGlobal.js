import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import WinComponent from '../components/WinComponent'

class SudokuGlobal extends React.Component{
  constructor(props){
    super(props)
  }

  isDeeplyEqual(leftObj, rightObj){
    JSON.stringify(leftObj) === JSON.stringify(rightObj)
  }

  isGameWon(nextProps){
    debugger
    if ( isDeeplyEqual(nextProps.game.current_board, nextProps.game.solution)
    && !nextProps.locked ) {
      console.log('checkmate atheists')
      this.setState({gameWon: true})
    }
  }

  componentWillReceiveProps(nextProps){
    this.isGameWon(nextProps)
  }

  render(){
    const winComponent = this.state.gameWon? <WinComponent key={1} /> : null
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

export default connect(mapStateToProps, null)(SudokuGlobal)
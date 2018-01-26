import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

class SudokuGlobal extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      gameWon: false
    })
  }

  isGameWon(nextProps){
    if
  }

  render(){
    return
  }
}

const mapStateToProps = (state) => {
  return {game: state.game.game}
}

export default connect(mapStateToProps(SudokuGlobal))
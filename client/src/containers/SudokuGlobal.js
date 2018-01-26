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
    if (nextProps.game.current_board === nextProps.game.solution && !nextProps.locked ) {
      this.setState({gameWon: true})
    }
  }

  render(){
    const winComponent = this.state.gameWon? <WinComponent key={1} /> : null
    return winComponent
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game.game,
    locked: state.game.locked
  }
}

export default connect(mapStateToProps(SudokuGlobal))
import React from 'react'
import InnerCell from '../components/InnerCell'
import ClueCell from '../components/ClueCell'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../actions/input'

class CellLogic extends React.Component{

  constructor(props){
    super(props)
    this.findindexOutter()
    this.findindexInner()
    this.state = {
      showInput: false,
      square: this.props.square
    }
  }

  findindexOutter(){
    this.outterIndex = (this.props.bigTable.x - 1) * 3 + this.props.littleTable.x - 1;
  }

  findindexInner(){
    this.innerIndex = (this.props.bigTable.y - 1) * 3 + this.props.littleTable.y - 1
  }

  setValue(){
    if(this.props.square > 0){
      return this.props.square
    }
    else{
      return "  "
    }
  }

  handleClick(event){
    console.log(this.showInput)
    this.setState({ showInput: this.showInput = true });
  }

  handleInput(event){
    this.props.actions.changeBoard(this.outterIndex, this.innerIndex,
      event.target.value, this.props.game.current_board)
  }

  render(){
    let chosenOne = !this.props.clue?
    <InnerCell handleClick={this.handleClick.bind(this)} showInput={this.state.showInput} value={this.setValue()} />
    : <ClueCell value={this.props.clue} />
    //show hidden image popover if showInput = true
    return chosenOne;
  }



}

function mapStateToProps(state) {
  debugger
  return {
    game: state.game.game,
    showInput: state.game.showInput
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CellLogic)
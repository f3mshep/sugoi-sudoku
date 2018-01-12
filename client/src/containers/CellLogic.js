import React from 'react'
import InnerCell from '../components/InnerCell'
import ClueCell from '../components/ClueCell'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class CellLogic extends React.Component{

  constructor(props){
    super(props)
    this.findindexOutter()
    this.findindexInner()
    this.state = {
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
    console.log(this.outterIndex, this.innerIndex)
  }

  handleInput(event){

  }

  render(){
    let chosenOne = !this.props.clue?
    <InnerCell handleClick={this.handleClick.bind(this)} value={this.setValue()} />
    : <ClueCell value={this.props.clue} />
    return chosenOne;
  }



}

function mapStateToProps(state) {
  return {
    showInput: state.showInput
  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(CellLogic)
import React from 'react'
import InnerCell from '../components/InnerCell'
import ClueCell from '../components/ClueCell'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//
function wherethefuckami(){

}


class CellLogic extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      square: this.props.square
    }
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
    console.log(this.props.coordinates.x, this.props.coordinates.y)
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
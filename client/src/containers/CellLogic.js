import React from 'react'
import 'BindActionCreators'

class CellLogic extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      square: '  '
    }
  }

  handleClick(event){

  }

  handleInput(event){

  }

  render(){
    return null;
  }



}

function mapStateToProps(state) {
  return {
    showInput: state.showInput
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CellLogic)
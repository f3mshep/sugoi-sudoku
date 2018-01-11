import React from 'react'

class CellLogic extends React.Component{

  constructor(props){
    super(props)
  }





}

function mapStateToProps(state) {
  return { game: state.game.game,

  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CellLogic)
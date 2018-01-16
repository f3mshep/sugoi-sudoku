import React from 'react'
import InnerCell from './InnerCell'
import ClueCell from '../components/ClueCell'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeBoard } from '../actions/input'

class CellLogic extends React.Component {
  //Smart component that handles logic of what goes inside the square
  //if component can be changed by a user, it passes information down to
  //another smart component
  constructor(props) {
    super(props);
    this.findindexOutter();
    this.findindexInner();
    this.state = {
      // showingInput: false,
      square: this.props.square
    };
  }

  findindexOutter() {
    this.outterIndex =
      (this.props.bigTable.y - 1) * 3 + this.props.littleTable.y - 1;
  }

  findindexInner() {
    this.innerIndex =
      (this.props.bigTable.x - 1) * 3 + this.props.littleTable.x - 1;
  }

  setValue() {
    if (this.props.square > 0) {
      return this.props.square;
    } else {
      return "  ";
    }
  }

  handleInput(event, value) {
    //new value is an optional argument that can be used to 'manually' set the
    //value of the cell
    const newValue = value || parseInt(event.target.innerHTML)
    this.props.actions.changeBoard(
      this.outterIndex,
      this.innerIndex,
      newValue,
      this.props.game.current_board
    );
  }

  render() {
    let chosenOne = !this.props.clue ? (
      <InnerCell
        handleInput={this.handleInput.bind(this)}
        value={this.setValue()}
      />
    ) : (
      <ClueCell value={this.props.clue} />
    );
    //show hidden image popover if showInput = true
    return chosenOne;
  }
}

function mapStateToProps(state) {
  return {
    game: state.game.game
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({changeBoard}, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CellLogic)
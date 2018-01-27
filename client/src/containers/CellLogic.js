import React from 'react'
import UserInputCell from './UserInputCell'
import ClueCell from '../components/ClueCell'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeBoard, gameIsWon } from '../actions/input'
import { withRouter } from "react-router-dom";


class CellLogic extends React.Component {
  //Smart component that handles logic of what goes inside the square
  //if component can be changed by a user, it passes information down to
  //another smart component
  constructor(props) {
    super(props);
    this.findindexOutter();
    this.findindexInner();
    this.state = {
      square: this.props.square
    };
  }

  isDeeplyEqual(leftObj, rightObj) {
    return JSON.stringify(leftObj) === JSON.stringify(rightObj)
  }

  isGameWon(current_board, solution) {
    if (this.isDeeplyEqual(current_board, solution)) {
      this.props.actions.gameIsWon()
    }
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
      //the following is JSX for RENDER A BLANK SPACE
      return '\u00A0';
    }
  }

  handleInput(event, value) {
    //value is an optional argument that can be used to 'manually' set the
    //value of the cell
    let newBoard = JSON.parse(JSON.stringify(this.props.game.current_board))
    const newValue = value || parseInt(event.target.innerHTML, 10)
    const boardAction = this.props.actions.changeBoard(
      this.outterIndex,
      this.innerIndex,
      newValue,
      newBoard
    );
    this.isGameWon(boardAction.current_board, this.props.game.solution)
  }

  render() {
    let chosenOne = !this.props.clue ? (
      <UserInputCell
        locked={this.props.locked}
        handleInput={this.handleInput.bind(this)}
        value={this.setValue()}
      />
    ) : (
     <ClueCell value={this.props.clue} />
    );
    //show hidden image popover if showInput = true
    return chosenOne

  }
}

function mapStateToProps(state) {
  return {
    game: state.game.game,
    locked: state.game.locked
  };
}

function mapDispatchToProps(dispatch) {
  return { actions:
    {
      changeBoard: bindActionCreators(changeBoard, dispatch),
      gameIsWon: bindActionCreators(gameIsWon, dispatch)
    }
  };
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CellLogic))
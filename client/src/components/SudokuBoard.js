import React from 'react'
import TableRow from "./TableRow";
import UserButtons from "../containers/UserButtons";
import DifficultyBar from "../containers/DifficultyBar";
import { withRouter } from 'react-router-dom'

const SudokuBoard = (props) => (
<div className="container boop">
  <div className="row justify-content-center">
    <DifficultyBar difficulty={props.game.difficulty} />
  </div>
  <div className="row top-buffer justify-content-center h-100">
    <div className="subtle-shadow">
      <table className="sudoku-grid main-table my-auto">
        <tbody>
          <TableRow
            coordinates={{ x: null, y: 1 }}
            clues={props.game.initial_board.slice(0, 3)}
            row={props.game.current_board.slice(0, 3)}
          />
          <TableRow
            coordinates={{ x: null, y: 2 }}
            clues={props.game.initial_board.slice(3, 6)}
            row={props.game.current_board.slice(3, 6)}
          />
          <TableRow
            coordinates={{ x: null, y: 3 }}
            clues={props.game.initial_board.slice(6)}
            row={props.game.current_board.slice(6)}
          />
        </tbody>
      </table>
    </div>
  </div>
  <div className="row top-buffer justify-content-center">
    <UserButtons />
  </div>
</div>
)

export default withRouter(SudokuBoard)
import React, { Component } from 'react';
import TableRow from './components/TableRow'

const initialBoard = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
];

const userBoard = [
  [3, 1, 6, 5, 7, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 4, 5, 2, 0, 6, 3, 0, 0]
];

const TOP=1
const MID=2
const BOT=3



class App extends Component {


  render() {
    return <div className="sudoku-grid">
        <table cellPadding="0" cellSpacing="0" border="1">
          <tbody>
            <TableRow location={TOP} clues={initialBoard.slice(0, 3)} row={userBoard.slice(0, 3)} />
            <TableRow location={MID} clues={initialBoard.slice(3, 6)} row={userBoard.slice(3, 6)} />
            <TableRow location={BOT} clues={initialBoard.slice(6)} row={userBoard.slice(6)} />
          </tbody>
        </table>
      </div>;
  }
}

export default App;

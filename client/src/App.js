import React, { Component } from 'react';
import TableRow from './components/TableRow'

const stubBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

const TOP=1
const MID=2
const BOT=3



class App extends Component {


  render() {
    return <div className="sudoku-grid">
        <table>
            <tbody>
              <TableRow location={TOP} row={stubBoard.slice(0,3)} />
              <TableRow location={MID} row={stubBoard.slice(3,6)} />
              <TableRow location={BOT} row={stubBoard.slice(6)} />
            </tbody>
        </table>
    </div>;
  }
}

export default App;

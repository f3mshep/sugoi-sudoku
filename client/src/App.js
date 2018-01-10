import React, { Component } from 'react';

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
          <TableRow location={TOP} row={stubBoard.slice(0,2)} />
          <TableRow location={MID} row={stubBoard.slice(3,5)} />
          <TableRow location={BOT} row={stubBoard.slice(6)} />
        </table>
    </div>;
  }
}

export default App;

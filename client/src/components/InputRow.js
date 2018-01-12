import React from 'react'
import InputCell from './InputCell'

const InputRow = (props) => {
  let cells = []
  let cellCount = 1
  while (cellCount < 4) {
    cells.push(<InputCell handleInput={props.handleInput} row={props.row} cell={cellCount} />);
    ++cellCount
  }
  return <tr>{cells}</tr>;
}

export default InputRow
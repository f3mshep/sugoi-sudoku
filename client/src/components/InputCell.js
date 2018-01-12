import React from 'react'

const InputCell = (props) => {
  let cellNumber = (props.row - 1) * 3 + props.cell
  return <td onClick={props.handleInput} className="input-cell">{cellNumber}</td> ;
}

export default InputCell
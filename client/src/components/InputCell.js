import React from 'react'

const InputCell = (props) => {
  let cellNumber = (props.row - 1) * 3 + props.cell
  return <td className="" onClick={props.handleInput} ><div className="input-cell">{cellNumber}</div></td> ;
}

export default InputCell
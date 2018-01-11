import React from 'react'
import TableCell from './TableCell'

  //pass individual cell as props to each table cell, along with location

  function rowSlice(rows, lastIndex){
    return rows.map(row =>{
      let initialIndex = lastIndex - 3
      return row.slice(initialIndex, lastIndex)
    })
  }


function TableRow(props){
  return <tr>
      <TableCell bigTable={{ x: 1, y: props.coordinates.y }} cell={rowSlice(props.row, 3)} cellClues={rowSlice(props.clues, 3)} />
      <TableCell bigTable={{ x: 2, y: props.coordinates.y }} cell={rowSlice(props.row, 6)} cellClues={rowSlice(props.clues, 6)} />
      <TableCell bigTable={{ x: 3, y: props.coordinates.y }} cell={rowSlice(props.row, 9)} cellClues={rowSlice(props.clues, 9)} />
    </tr>;
}

export default TableRow
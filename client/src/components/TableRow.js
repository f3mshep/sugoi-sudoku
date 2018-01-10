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
      <TableCell location={`left-${props.location}`} cell={rowSlice(props.row, 3)} cellClues={rowSlice(props.clues, 3)} />
      <TableCell location={`mid-${props.location}`} cell={rowSlice(props.row, 6)} cellClues={rowSlice(props.clues, 6)} />
      <TableCell location={`right-${props.location}`} cell={rowSlice(props.row, 9)} cellClues={rowSlice(props.clues, 9)} />
    </tr>;
}

export default TableRow
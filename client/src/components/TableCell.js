import React from "react";
// create a table cell that is 9x9 squares. Each square is a span.

const TableCell = (props) =>{
  const table = <table>
    <tbody>
      {props.cell.map(row =>
        <tr>{row.map(square => <td>{square}</td>)}</tr>
      )}
    </tbody>
  </table>;


  return <td>{table}</td> ;
}

export default TableCell
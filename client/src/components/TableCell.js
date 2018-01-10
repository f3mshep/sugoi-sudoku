import React from "react";
// create a table cell that is 9x9 squares. Each square is a span.

function TableCell = (props) =>{
  const table = <table>{props.cell}</table>
  return table ;
}

export default TableCell
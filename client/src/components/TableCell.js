import React from "react";
import InnerTableRow from "./InnerTableRow";
// create a table cell that is 9x9 squares. Each square is a span.

const TableCell = (props) =>{

  return <td>
      <table className="sudoku-grid" cellPadding="0" cellSpacing="0">
        <tbody>
          <InnerTableRow
            rowClass={"top-row"}
            bigTable={props.bigTable}
            littleTable={{x:null, y:1}}
            row={props.cell[0]}
            clues={props.cellClues[0]} />
          <InnerTableRow
            bigTable={props.bigTable}
            littleTable={{x:null, y:2}}
            row={props.cell[1]}
            clues={props.cellClues[1]} />
          <InnerTableRow
            bigTable={props.bigTable}
            littleTable={{x:null, y:3}}
            row={props.cell[2]}
            clues={props.cellClues[2]} />
        </tbody>
      </table>
    </td>;
}

export default TableCell
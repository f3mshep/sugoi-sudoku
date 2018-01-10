import React from "react";
import InnerCell from './InnerCell'
// create a table cell that is 9x9 squares. Each square is a span.

const TableCell = (props) =>{
  function clueSlicer(lastIndex){
    props.cellClues.slice
  }
  function cellSlicer(lastIndex){

  }
  // const table = <table cellPadding="0" cellSpacing="0" border="1">
  //   <tbody>
  //     {props.cell.map((row,indxI) =>
  //       <tr>
  //         {row.map((square, indxJ) =>
  //         {
  //           let clue = props.cellClues[indxI][indxJ]
  //           if(clue){
  //             return <td class="clue"><span><strong>{clue}</strong></span></td>
  //           }
  //           else{
  //             return <td><span>{square}</span></td>
  //           }
  //           })
  //         }
  //       </tr>
  //     )}
  //   </tbody>
  // </table>;


  // return <td>{table}</td> ;
  return <table>
    <tbody>
      <InnerTableRow />
      <InnerTableRow />
      <InnerTableRow />
    </tbody>
  </table>;
}

export default TableCell
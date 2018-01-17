import React from "react";
import InputRow from './InputRow'

 const inputTable = (props) =>{
  let rows = []
  let rowCount = 1
  while (rowCount < 4) {
    rows.push(<InputRow handleInput={props.handleInput} row={rowCount} />);
    ++rowCount
  }
  return <div id="input-table-holder">
      <table className="fade in" id="input-popover">
        <tbody>{rows}</tbody>
      </table>
    </div>;
}

export default inputTable
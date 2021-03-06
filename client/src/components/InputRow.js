import React from "react";
import InputCell from "./InputCell";

const InputRow = props => {
  let cells = [];
  let cellCount = 1;
  while (cellCount < 4) {
    cells.push(
      <InputCell
        handleInput={props.handleInput}
        key={cellCount}
        row={props.row}
        cell={cellCount}
      />
    );
    ++cellCount;
  }
  return <tr className="">{cells}</tr>;
};

export default InputRow;

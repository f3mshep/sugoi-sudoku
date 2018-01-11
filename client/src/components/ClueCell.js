import React from 'react'

const ClueCell = props => {
  return (
    <td className="cell clue">
      <span>{props.value}</span>
    </td>
  );
};

export default ClueCell;

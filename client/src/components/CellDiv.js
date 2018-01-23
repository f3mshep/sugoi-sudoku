import React from 'react'

const CellDiv = (props) => (
  <div className={props.divClass}>
    <span>{props.value}</span>
  </div>
);

export default CellDiv
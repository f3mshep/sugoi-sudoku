import React from 'react'
import CellLogic from '../containers/CellLogic'

const InnerTableRow = (props) =>{

  return <tr className="">
      <CellLogic coordinates={{ x: props.coordinates.x, y: props.coordinates.y }} square={props.row[0]} clue={props.clues[0]} />
      <CellLogic coordinates={{ x: props.coordinates.x * 2, y: props.coordinates.y }} square={props.row[1]} clue={props.clues[1]} />
      <CellLogic coordinates={{ x: props.coordinates.x * 3, y: props.coordinates.y }} square={props.row[2]} clue={props.clues[2]} />
    </tr>;
}

export default InnerTableRow
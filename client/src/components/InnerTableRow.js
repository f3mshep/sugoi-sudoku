import React from 'react'
import InnerCell from './InnerCell'

const InnerTableRow = (props) =>{

  return <tr className="">
      <InnerCell coordinates={ {x: props.coordinates.x, y: props.coordinates.y} } square={props.row[0]} clue={props.clues[0]} />
      <InnerCell coordinates={ {x: props.coordinates.x * 2, y: props.coordinates.y} } clue={props.clues[1]} />
      <InnerCell coordinates={ {x: props.coordinates.x * 3, y: props.coordinates.y} } clue={props.clues[2]} />
    </tr>;
}

export default InnerTableRow
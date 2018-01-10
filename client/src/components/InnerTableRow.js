import React from 'react'
import InnerCell from './InnerCell'

const InnerTableRow = (props) =>{

  return <tr>
      <InnerCell square={props.row[0]} clue={props.clues[0]} />
      <InnerCell square={props.row[1]} clue={props.clues[1]} />
      <InnerCell square={props.row[2]} clue={props.clues[2]} />
    </tr>;
}

export default InnerTableRow
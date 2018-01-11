import React from 'react'
import CellLogic from '../containers/CellLogic'

const InnerTableRow = (props) =>{

  return <tr className="">
      <CellLogic
        bigTable={props.bigTable}
        littleTable={{ x: 1, y: props.littleTable.y }}
        square={props.row[0]}
        clue={props.clues[0]} />
      <CellLogic
        bigTable={props.bigTable}
        littleTable={{ x: 2, y: props.littleTable.y }}
        square={props.row[1]}
        clue={props.clues[1]} />
      <CellLogic
        bigTable={props.bigTable}
        littleTable={{ x: 3, y: props.littleTable.y }}
        square={props.row[2]}
        clue={props.clues[2]} />
    </tr>;
}

export default InnerTableRow
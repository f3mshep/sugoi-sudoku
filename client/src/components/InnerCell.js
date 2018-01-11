import React from 'react'

const InnerCell = (props) => {
  // if(props.clue){
  //   return <td className="clue cell">
  //       <span>
  //         {props.clue}
  //       </span>
  //     </td>;
  // }
  // else if (props.square) {
  //   <CellLogic square={props.square} coordinates={props.coordinates} />
  //   return <td className="cell clicky">
  //       <span>{props.square}</span>
  //     </td>;
  // }
  // else{
  //   return <td className="cell clicky empty">
  //       <span>&nbsp;&nbsp;</span>
  //     </td>;
  // }

  return <td onClick={props.handleClick} className="cell clicky">
      <span>{props.value}</span>
  </td>;
}

export default InnerCell
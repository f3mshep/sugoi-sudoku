import React from 'react'

const InnerCell = (props) => {
  if(props.clue){
    return <td className="clue"><span><strong>{props.clue}</strong></span></td>
  }
  else if (props.square) {
    return <td><span>{props.square}</span></td>
  }
  else{
    return <td><span> </span></td>
  }
}

export default InnerCell
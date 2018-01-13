import React from 'react'

const CloseButton = (props) => {
  return <div onClick={event => (props.handleInput(event, 0))} className="close-button">&#10006;</div>;
}

export default CloseButton
import React from 'react'

const CloseButton = (props) => {
  if (props.displaying) {
    return <div onClick={event => {
        event.stopPropagation()
        props.handleInput(event, 0)
      } } className="close-button">&#10006;</div>;
  }
  else {
    return null;
  }
}

export default CloseButton
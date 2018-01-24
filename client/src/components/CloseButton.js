import React from 'react'

const CloseButton = (props) => {
  if (props.displaying) {
    return <div onClick={event => {
          event.stopPropagation();
          props.handleInput(event, 0);
        }}>
        <button className="close-button close">&times;</button>
      </div>;
  }
  else {
    return null;
  }
}

export default CloseButton
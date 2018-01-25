import React from 'react'

const UserButton = props => {
  return (
    <button onClick={props.callback} className={props.buttonClass}>{props.value}</button>
  );
};

export default UserButton
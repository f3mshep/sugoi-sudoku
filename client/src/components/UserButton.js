import React from 'react'

const UserButton = props => {
  return (
    <button onClick={props.callback} className="btn btn-secondary">{props.value}</button>
  );
};

export default UserButton
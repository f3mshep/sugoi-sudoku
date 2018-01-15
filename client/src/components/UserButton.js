import React from 'react'

const UserButton = props => {
  return (
    <button onClick={props.callback} class="btn btn-secondary">{props.value}</button>
  );
};

export default UserButton
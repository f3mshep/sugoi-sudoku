import React from 'react'

const RadioToggle = (props) => {
  return <a href={props.path} className={props.active ? "btn btn-lg btn-outline-secondary active" : "btn btn-lg btn-outline-secondary"}>
      {props.value}
    </a>;
}

export default RadioToggle
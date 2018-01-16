import React from 'react'

const RadioToggle = (props) => {
  return <label className={props.active ? "btn btn-lg btn-outline-secondary active" : "btn btn-lg btn-outline-secondary"}>
      <input type="radio" /> {props.value}
    </label>;
}

export default RadioToggle
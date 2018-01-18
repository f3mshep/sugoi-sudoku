import React from 'react'
import { NavLink } from 'react-router-dom'

const RadioToggle = (props) => {
  // return <a href={props.path} className={props.active ? "btn btn-lg btn-outline-secondary active" : "btn btn-lg btn-outline-secondary"}>
  //     {props.value}
  //   </a>;
  return <NavLink exact className={props.active ? "btn btn-lg btn-outline-secondary active" : "btn btn-lg btn-outline-secondary"} to={props.path}>
      {props.value}
    </NavLink>;
}

export default RadioToggle
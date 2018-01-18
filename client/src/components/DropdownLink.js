import React from 'react'
import { NavLink } from 'react-router-dom'

const DropdownLink = (props) => {
  return <NavLink exact to={props.path}>{props.value}</NavLink>
}

export default DropdownLink
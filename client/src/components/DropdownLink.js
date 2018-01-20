import React from 'react'
import { NavLink } from 'react-router-dom'

const DropdownLink = (props) => {
  return <NavLink exact to={props.path}><div onClick={()=> {
    props.callback(props.id)}}>{props.value}</div></NavLink>
}

export default DropdownLink
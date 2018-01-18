import React from 'react'
import {Link } from 'react-router-dom'

const DropdownLink = (props) => (
  <Link replace to={{ pathname: props.path}}>{props.value}</Link>
)

export default DropdownLink
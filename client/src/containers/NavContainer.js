import React from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router-dom";

class NavContainer extends React.Component{

  choosePath = () => {
    debugger
  }

  render(){
    return <NavBar value={this.choosePath()}/>
  }

}

export default NavContainer
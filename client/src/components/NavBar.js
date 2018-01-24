import React from 'react'
import {NavLink} from 'react-router-dom'

const DEFAULT = (
  <NavLink className="nav-link" to="/sudoku/new/easy">
    Play Sudoku!
  </NavLink>
);

const NavBar = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        SudokuNow
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="container mx-auto">
        <div className="collapse mx-auto navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {props.value? props.value : DEFAULT}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar
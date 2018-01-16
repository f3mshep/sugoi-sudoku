import React from 'react'

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        SudokuNow
      </a>
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
              <a className="nav-link" href="/sudoku/easy">
                Play Sudoku!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar
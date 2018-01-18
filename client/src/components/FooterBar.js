import React from 'react'
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'

const FooterBar = props => (
  <div className="footer-wrap">
    <footer>
      <nav className="navbar-expand-lg navbar-light bg-light">

            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/f3mshep">
                  <FontAwesome size="2x" name="github" />
                </a>
              </li>
              <li className="nav-link">
                <NavLink
                  className="no-color nav-link"
                  to="/about"
                >
                  <p>about Sudoku Now</p>
                </NavLink>
              </li>
            </ul>

      </nav>
    </footer>
  </div>
);

export default FooterBar
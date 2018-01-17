import React from 'react'
var FontAwesome = require("react-fontawesome");


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
                <a
                  className="no-color nav-link"
                  href="/about"
                >
                  <p>About Sudoku Now</p>
                </a>
              </li>
            </ul>

      </nav>
    </footer>
  </div>
);

export default FooterBar
import React from 'react'

const FooterBar = (props) => (
<div className="footer-wrap">
<footer>
      <nav className="navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/f3mshep">
                            github
                        </a>
                    </li>
                    <li className="nav-link">
                        <a className="no-color nav-link" href="https://developer.edamam.com/">
                            <p>Recipe analysis powered by Edamam API</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</footer>
</div>
)

export default FooterBar
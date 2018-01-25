import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar'

const NotFound = () => (
  <div>
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>
              Oops!</h1>
            <h2>
              404 Not Found</h2>
            <div class="error-details">
              Hopefully nothing has exploded.
                  </div>
            <div class="error-actions">
              <NavLink exact to='/' className="btn btn-primary btn-lg">
                Take Me Home </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
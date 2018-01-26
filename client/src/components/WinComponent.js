import React from 'react'
import { NavLink } from 'react-router-dom'

const WinComponent = (props) => (

      <div className="modal-content">
        <div className="modal-header">
          Nice job!
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <NavLink exact to="/sudoku/new/easy" className="btn btn-primary">Play again?</NavLink>
        </div>
      </div>

)

export default WinComponent
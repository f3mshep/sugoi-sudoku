import React from 'react'

const WinComponent = (props) => (

      <div className="modal-content">
        <div className="modal-header">
          Nice job!
          <button onClick={props.closeModal} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <button className="btn btn-primary" onClick={props.fetchGame}>Play again?</button>
        </div>
      </div>

)

export default WinComponent
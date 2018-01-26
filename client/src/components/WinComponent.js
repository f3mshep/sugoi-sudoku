import React from 'react'

const WinComponent = (props) => (
  <div>
    <div className="modal-header">
      Victory is yours!
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <button className="btn btn-primary">Play Again?</button>
    </div>
  </div>
)

export default WinComponent
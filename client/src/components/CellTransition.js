import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import InputPopover from './InputPopover'

const CellTransition = (props) => (
  <ReactCSSTransitionGroup component="div" className="make-absolute" transitionName="input-popover" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
    {props.showingInput ? <InputPopover key={1} handleInput={props.handleInput} /> : null}
  </ReactCSSTransitionGroup>
)

export default CellTransition
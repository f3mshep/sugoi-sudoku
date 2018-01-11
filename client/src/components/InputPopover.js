import React from "react";
import { OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'


const inputPopover = (
  <Popover>
    <div id="input-popover">
      <div className="row">
        <div className="btn-group">
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">1</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">2</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">3</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="btn-group">
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">4</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">5</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">6</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="btn-group">
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">7</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">8</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-secondary btn-sm">9</button>
          </div>
        </div>
      </div>
    </div>
  </Popover>
);


const OverlayClick = props => (
  <OverlayTrigger
    trigger="click"
    rootClose
    placement="right"
    overlay={inputPopover}
  >
  </OverlayTrigger>
);


export default OverlayClick

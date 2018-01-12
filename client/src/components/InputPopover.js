import React from "react";
import InputRow from './InputRow'

// const inputPopover = () => (
//     <div className="fade in" id="input-popover">
//       <div className="row">
//         <div className="btn-group">
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">1</button>
//           </div>
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">2</button>
//           </div>
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">3</button>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="btn-group">
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">4</button>
//           </div>
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">5</button>
//           </div>
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">6</button>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="btn-group">
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">7</button>
//           </div>
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">8</button>
//           </div>
//           <div className="col-xs-4">
//             <button className="btn btn-secondary btn-sm">9</button>
//           </div>
//         </div>
//       </div>
//     </div>
// );


// export default inputPopover


 const inputTable = (props) =>{
  let rows = []
  let rowCount = 1
  while (rowCount < 4) {
    rows.push(<InputRow handleInput={props.handleInput} row={rowCount} />);
    ++rowCount
  }
  return <table className="fade in" id="input-popover"><tbody>{rows}</tbody></table>;
}

export default inputTable
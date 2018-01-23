import React from 'react'
import CellDiv from './CellDiv'

class ClueCell extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      divClass: "span-value"
    }
  }
  render(){
  return (
    <td className="cell clue">
      <CellDiv divClass={this.state.divClass} value={this.props.value} />
    </td>
  )
  }
  componentDidMount(){
    const that = this
    setTimeout(() => {
      that.setState({
        divClass: "span-value show"
      })
    }, 1);
  }
}

export default ClueCell;

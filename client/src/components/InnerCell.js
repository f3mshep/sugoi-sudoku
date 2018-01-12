import React from 'react'
import InputPopover from "../components/InputPopover";

class InnerCell extends React.Component {
  //smart component that handles showing input
  constructor(props) {
    super(props);
    this.state = ({ showInput: false });
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClick(event) {
    console.log(this.showInput);
    this.setState({ showInput: (this.showInput = true) });
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      this.state.showInput &&
      !this.wrapperRef.contains(event.target)
    ) {
      this.setState({
        showInput: false
      })
    }
  }

  render() {
    return (
      <td
        ref={this.setWrapperRef}
        onClick={this.handleClick.bind(this)}
        className="cell clicky"
      >
        {this.state.showInput ? <InputPopover handleInput={this.props.handleInput} /> : null}
        <span>{this.props.value}</span>
      </td>
    );
  }
}

export default InnerCell
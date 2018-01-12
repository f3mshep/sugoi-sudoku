import React from 'react'
import InputPopover from "../components/InputPopover";

class InnerCell extends React.Component {
  //smart component that handles click detection for input
  constructor(props) {
    super(props);

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



  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      this.props.showingInput &&
      !this.wrapperRef.contains(event.target)
    ) {
      this.props.hideInput()
    }
  }

  render() {
    return (
      <td
        ref={this.setWrapperRef}
        onClick={this.props.showInput}
        className="cell clicky"
      >
        {this.props.showingInput ? <InputPopover handleInput={this.props.handleInput} /> : null}
        <span>{this.props.value}</span>
      </td>
    );
  }
}

export default InnerCell
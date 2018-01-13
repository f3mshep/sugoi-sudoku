import React from 'react'
import InputPopover from "../components/InputPopover";
import CloseButton from "./CloseButton"

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

  hasNumber(){
    return this.props.value > 0
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
    return <td ref={this.setWrapperRef} onClick={this.props.showInput} className={this.props.showingInput ? "cell" : "cell clicky"}>
        {this.props.showingInput ? <InputPopover handleInput={this.props.handleInput} /> : null}
        {this.hasNumber()? <CloseButton handleInput={this.props.handleInput}/> : null}
        <span className='span-value'>{this.props.value}</span>
      </td>;
  }
}

export default InnerCell
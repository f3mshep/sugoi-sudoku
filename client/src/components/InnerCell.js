import React from 'react'
import InputPopover from "../components/InputPopover";
import CloseButton from "./CloseButton"

class InnerCell extends React.Component {
  //smart component that handles user interaction
  constructor(props) {
    super(props);
    this.state = {
      showingInput: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  hideInput() {
    console.log("hiding");
    this.setState({ showingInput: false });
  }

  showInput() {
    console.log("showing");
    this.setState({ showingInput: true });
  }

  handleInputAndHide(event, value){
    this.props.handleInput(event, value)
    setTimeout(this.hideInput.bind(this), 10);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  hasNumber() {
    return this.props.value > 0;
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      this.props.showingInput &&
      !this.wrapperRef.contains(event.target)
    ) {
      this.props.hideInput();
    }
  }

  render() {
    return (
      <td
        ref={this.setWrapperRef}
        onClick={this.showInput.bind(this)}
        className={this.state.showingInput ? "cell" : "cell clicky"}
      >
        {this.state.showingInput ? (
          <InputPopover handleInput={this.handleInputAndHide.bind(this)} />
        ) : null}
        {this.hasNumber() ? (
          <CloseButton handleInput={this.handleInputAndHide.bind(this)} />
        ) : null}
        <span className="span-value">{this.props.value}</span>
      </td>
    );
  }
}

export default InnerCell
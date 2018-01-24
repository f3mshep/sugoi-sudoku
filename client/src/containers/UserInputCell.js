import React from 'react'
import InputPopover from "../components/InputPopover";
import CloseButton from "../components/CloseButton"
import CellDiv from "../components/CellDiv"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import CellTransition from '../components/CellTransition'

class UserInputCell extends React.Component {
  //smart component that handles user interaction
  constructor(props) {
    super(props);
    this.state = {
      showingInput: false,
      divClass: "span-value clicky"
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
    this.setState({ showingInput: false });
  }

  showInput() {
    this.setState({ showingInput: true });
  }

  handleInputAndHide(event, value) {
    this.props.handleInput(event, value);
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
      this.state.showingInput &&
      !this.wrapperRef.contains(event.target)
    ) {
      this.hideInput();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ divClass: "span-value clicky show" });
  }

  //add className function
  //add CellTransition Dumb Component
  //add CloseButton Function

  findClassName(){
    if(this.props.locked) return "cell locked"
    return this.state.showingInput ? "cell" : "cell clicky"
  }

  render() {
    return <td ref={this.setWrapperRef} onClick={this.showInput.bind(this)} className={this.findClassName()}>
        <CellTransition showingInput={this.state.showingInput} handleInput={this.handleInputAndHide.bind(this)} />
        {this.hasNumber() ? <CloseButton handleInput={this.handleInputAndHide.bind(this)} /> : null}
        <CellDiv divClass={this.state.divClass} value={this.props.value} />
      </td>;
  }
}

export default UserInputCell
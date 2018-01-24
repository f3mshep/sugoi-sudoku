import React from 'react'
import CloseButton from "../components/CloseButton"
import CellDiv from "../components/CellDiv"
import CellTransition from '../components/CellTransition'

class UserInputCell extends React.Component {
  //smart component that handles user interaction
  //state initially rendered without show to add a pretty pop-in animation
  constructor(props) {
    super(props);
    this.state = { showingInput: false, showingClose: false, divClass: "span-value clicky" };
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
    if (!this.props.locked) this.setState({ showingInput: true });
  }

  handleInputAndHide(event, value) {
    this.props.handleInput(event, value);
    setTimeout(this.hideInput.bind(this), 10);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  shouldCloseExist(nextProps) {
    const showClose = nextProps.value > 0 && !nextProps.locked
    this.setState({
      showingClose: showClose
    })
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
    this.shouldCloseExist(nextProps)
    this.setClassName(nextProps)
  }

  setClassName(nextProps){
    const chosenClass = nextProps.locked? "span-value show locked" : "span-value show clicky"
    this.setState({divClass: chosenClass})
  }

  render() {
    return <td ref={this.setWrapperRef} onClick={this.showInput.bind(this)} className='cell'>
        <CellTransition showingInput={this.state.showingInput} handleInput={this.handleInputAndHide.bind(this)} />
        <CloseButton displaying={this.state.showingClose} handleInput={this.handleInputAndHide.bind(this)} />
        <CellDiv divClass={this.state.divClass} value={this.props.value} />
      </td>;
  }
}

export default UserInputCell
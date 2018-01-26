import Modal from 'react-modal'
import React from 'react'
import WinComponent from './WinComponent'

class ReactModal extends React.Component{
  constructor(props){
      super(props)
      this.state = { isOpen: false }
      this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    //Code for handling click outside

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
      this.wrapperRef = node;
    }

    handleClickOutside(event) {
      if (this.wrapperRef && this.state.isOpen && !this.wrapperRef.contains(event.target)) {
        this.closeModal()
      }
    }

    //End

    componentWillReceiveProps(nextProps){
      if (nextProps.isWon) this.openModal()
    }

    closeModal(){
      this.setState({isOpen: false})
    }

    openModal(){
      this.setState({isOpen: true})
    }

    render(){
      return <div ref={this.setWrapperRef} >
        <Modal isOpen={this.state.isOpen}
        ><WinComponent /></Modal>
      </div>;
    }
}

export default ReactModal
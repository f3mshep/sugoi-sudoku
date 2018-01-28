
import React from 'react'
import WinComponent from './WinComponent'
import { connect } from 'react-redux'

class WinnerModal extends React.Component{
  constructor(props){
      super(props)
      this.state = { isOpen: false, currentClass: "modal fade" }
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
      if (this.wrapperRef && this.state.isOpen && this.wrapperRef === event.target) {
        this.closeModal()
      }
    }

    //End

    componentWillReceiveProps(nextProps){
      if (nextProps.isWon && this.state.isOpen === false) this.openModal()
    }

    closeModal(){
      const that = this
      this.setState({isOpen: false})
      this.setState({ currentClass: "modal fade force-block" })
      setTimeout(() => {
        that.setState({ currentClass: "modal show fade" })
      }, 100);
    }

    openModal(){
      const that = this
      this.setState({isOpen: true})
      this.setState({ currentClass: "modal fade my-overlay force-block"})
      setTimeout(() => {
        that.setState({ currentClass: "modal show my-overlay fade force-block"})
      }, 10);
    }

    fetchAndClose(){
      const that = this
      this.props.fetchGame()
      .then( ()=> that.closeModal())
    }

    render(){
      return <div ref={this.setWrapperRef} className={this.state.currentClass}>
        <div  className="modal-dialog">
          <WinComponent closeModal = {this.closeModal.bind(this)} fetchGame={this.fetchAndClose.bind(this)}  />
        </div>
      </div>;
    }
}

const mapStateToProps = (state) => {
  return {isWon: state.game.isWon}
}

export default connect(mapStateToProps,null)(WinnerModal)
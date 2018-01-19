import React from 'react'
import { AlertList } from "react-bs-notifier";

const alert = [{
  id: 1,
  type: 'info',
  message: "Game Saved!"
}]


class SaveAlert extends React.Component{
  constructor(props){
    super(props)
  }

  onAlertDismissed(){
    this.props.disableAlert()
  }

    render(){
      const alertBox = this.props.alert ? <AlertList dismissTitle="Begone!" onDismiss={this.onAlertDismissed.bind(this)} alerts={alert} /> : null;
      return alertBox;
    }



}

export default SaveAlert;
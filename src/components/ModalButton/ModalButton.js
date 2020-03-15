import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal'

class ModalButton extends Component {

  constructor() {
    super()
    this.state = {
      buttonState: 0
    }
  }

  handleClick = () => {this.state.buttonState === 0 ? this.setState({buttonState: 1}) : this.setState({buttonState: 0})}

  render() {
    return (
      <div className="modal-button" onClick={this.handleClick}>
        <button>Modal block</button>
        <Modal buttonState={this.state.buttonState}/>
      </div>
    );
  }
}

export default ModalButton;

import React, { Component } from 'react';
import Modal from './Modal.js';
import './ModalButton.css';

export default class ModalButton extends Component {
  
  state = {
    modalCondition: false
  };

  showModal = () => {
    this.setState(state => ({
      modalCondition: true
    }));
  };


  hideModal = () => {
    this.setState(state => ({
      modalCondition: false
    }));
  };

  render() {
    return (
      <div>
        <button className="modal-button" onClick={this.showModal}>Modal Window</button>
        {this.state.modalCondition && <Modal hideModal={this.hideModal} />}
      </div>
    );
  }
}
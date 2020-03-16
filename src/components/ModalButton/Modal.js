import React, {
  PureComponent
} from 'react';
import ReactDOM from 'react-dom';
import './ModalButton.css';

class Modal extends PureComponent {

  render() {

    const {
      hideModal
    } = this.props;

    return ReactDOM.createPortal( <
      div className = "modal" >
      <
      div className = "modal__background" >
      <
      div className = "background__wrapper" >
      <
      div className = "wrapper__title" >
      <
      h1 > Modal window < /h1> <
      button className = "title__cross-button"
      onClick = {
        hideModal
      } > X < /button> <
      /div> <
      div className = "wrapper__body" >
      <
      p > Do you agree ? < /p> <
      /div> <
      div className = "wrapper__footer" >
      <
      button onClick = {
        hideModal
      } > No < /button> <
      button className = ""
      onClick = {
        hideModal
      }
      onSubmit = {
        console.log(true)
      } > Yes < /button> <
      /div> <
      /div> <
      /div> <
      /div>,
      document.getElementById('modal')
    );
  }
}
export default Modal;
import React, { Component } from 'react';

export default class CardNumberInput extends Component {
 
  inputRef = React.createRef();

  handleInput = () => {
    const {
      inputRef: {current}
    } = this;
    current.value ? current.value =this.format(current.value) : false;
  }

  format = value => {
    if (value === null) {
      return '';
    }
    const newValue = value.replace(/\s/g, '').trim();
    const modified = newValue
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    return modified;
  };

  handleSubmit = () => {
    this.props.cardNumber = "";
  };

  render() {
    return (
      <input
        maxLength="19" //ограничение числа вводимых знаков с учетом пробелов
        placeholder="Type ur Card Number"
        ref={this.inputRef}
        onSubmit={this.handleSubmit}
        onChange = {this.handleInput}
      />
    );
  }
}

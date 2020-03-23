import React, { Component } from 'react';

export default class CardNumberInput extends Component {

  handleInput = (event) => {
    const {format} = this;
    const {currentTarget} = event;
    currentTarget.value = format(currentTarget.value);
   }
   format = value => value ? value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1').trim() : '';

  render() {
    return (
      <input
        maxLength="19" //ограничение числа вводимых знаков с учетом пробелов
        placeholder="Type ur Card Number"
        onChange = {this.handleInput}
      />
    );
  }
}

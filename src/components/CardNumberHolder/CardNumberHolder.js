import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput.js';

export default class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  static displayName = 'Card number';

  handleChange = value => {
    this.setState(state => ({
      cardNumber: value
    }));
  };

  handleSubmit = value => {
    value.preventDefault();
    console.log(this.state.cardNumber);
    window.alert('thanks for the response');
    this.setState(state => ({
      cardNumber: ''
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardNumberInput
          onChange={this.handleChange}
          cardNumber={this.state.cardNumber}
        />
      </form>
    );
  }
}

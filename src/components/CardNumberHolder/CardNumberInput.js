import React, { Component } from 'react';

export default class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      number: props.cardNumber ? this.format(props.cardNumber) : ''
    };
  }

  stateChange = cardNumber => {
    this.setState(
      state => ({
        number: this.format(cardNumber)
      }),
      () => (this.inputRef.current.value = this.state.number)
    );
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { cardNumber } = nextProps;
    this.stateChange(cardNumber);
  }

  format = value => {
    if (value === null) {
      return '';
    }
    const newValue = value.toString();
    const modified = newValue
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    return modified;
  };

  handleSubmit = () => {
    this.stateChange('');
  };

  normalize = value => {
    const newValue = value.replace(/\s/g, '').trim();
    return newValue;
  };

  render() {
    // console.log(this.inputRef.target.value);

    const { onChange } = this.props;
    return (
      <input
        maxLength="19" //ограничение числа вводимых знаков с учетом пробелов
        placeholder="Type ur Card Number"
        ref={this.inputRef}
        onSubmit={this.handleSubmit}
        onChange={event => onChange(this.normalize(event.target.value))}
      />
    );
  }
}

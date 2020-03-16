import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.format(this.props.cardNumber)
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.cardNumber !== this.props.cardNumber) {
  //     this.setState(() => ({
  //       number: this.format(nextProps.cardNumber)
  //     }));
  //   }
  // }

  // format(number) {
  //   if (number === null || !number) {
  //     return '';
  //   }

    let res = [];
    let arr = number.toString().split('');

    while (arr.length > 0) {
      res.push(arr.splice(0, 4).join(''));
    }

    return res.join(' ');
  }

  // normalize = number => number.replace(/\s/g, '');


  render() {
    return <input value={this.state.number} onChange={this.handleInput} />;
  }
}

export default CardNumberInput;
import React, { Component } from "react";
import CardNumberHolder from "./CardNumberInput";

class CardNumberHolder extends Component {
  state = {
    cardNumber: ""
  };

  static displayName = "Card number";

  handleChange = text => {
    this.setState(() => ({
      cardNumber: text
    }));
  };

  render() {
    return (
      <CardNumberInput
        cardNumber={this.state.cardNumber}
        onchange={this.handleChange}
      />
    );
  }
}

export default CardNumberHolder;

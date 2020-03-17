import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

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
      <div className="Card">
      <CardNumberInput
        cardNumber={this.state.cardNumber}
        onchange={this.handleChange}
      />
      </div>
    );
  }
}

export default CardNumberHolder;

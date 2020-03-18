import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    onChangeForm(event.target.name, event.target.value);
  };

  render() {
    return (
      <div data-test="card-form" className="id-form">
        <h1 className="title">Введите свой ID number, 10 цифр</h1>
        <input
          name="cardNumber"
          placeholder="12345678, 10 digits"
          value={this.props.cardNumber}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;

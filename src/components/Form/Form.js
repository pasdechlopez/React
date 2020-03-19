import React, { Component } from 'react';

import './Form.css';
import PersonalForm from './PersonalInfo';
import CardForm from './CardForm';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  handleFormChange = (name, value) =>
    this.setState({
      [name]: value
    });

  handleNextButtonClick = () => {
    const { step, setStep } = this.props;
    setStep(step + 1);
  };

  //проверка адекватности ввода
  validateForm = () => {
    const {
      state: { email, lastName, firstName, cardNumber },
      props: { step },
      reg
    } = this;

    switch (step) {
      case 1:
        return (
          firstName !== '' && lastName !== '' && email !== '' && reg.test(email)
        );
      case 2:
        return cardNumber.length === 10;
      default:
        return false;
    }
  };

  renderFormByStep = () => {
    const {
      state: { firstName, lastName, email, cardNumber },
      props: { step },
      handleFormChange
    } = this;

    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={handleFormChange}
          />
        );
      case 2:
        return (
          <CardForm cardNumber={cardNumber} onChangeForm={handleFormChange} />
        );
      case 3:
        return <p data-test="congratulations">Данные успешно сохранены</p>;
      default:
        return <p>Ошибка!</p>;
    }
  };

  render() {
    const {
      props: { step },
      renderFormByStep,
      validateForm,
      handleNextButtonClick
    } = this;

    return (
      <div>
        <div className="form-content">{renderFormByStep()}</div>
        <div className="button">
          <button
            className="button-next"
            onClick={handleNextButtonClick}
            disabled={!validateForm()}
            hidden={step === 3}
          >
            Next
          </button>
        </div>
      
    </div>
   );
  }
}

export default Form;

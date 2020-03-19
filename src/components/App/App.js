import React, { Component } from 'react';
import './App.css';
import CardForm from 'components/CardForm/CardForm';
import Step from 'components/Step/Step';
import PersonalForm from 'components/PersonalInfo/PersonalInfo';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  steps = ['Personal Info', 'Card info', 'Success'];

  handleClickNextForm = () => {
    this.setState(function(prevState) {
      return {
        step: prevState.step + 1
      };
    });
  };

  //проверка адекватности ввода
  formConditions = () => {
    const {
      state: { email, lastName, firstName, cardNumber, step }
    } = this;
    switch (step) {
      case 1:
        return (
          firstName !== '' && lastName !== '' && email !== '' && reg.test(email)
        );
      case 2:
        // break;
        return cardNumber.length === 10;
      default:
        return false;
    }
  };

  handleTabClick = tabNumber => {
    this.setState({
      step: tabNumber
    });
  };
  //смена активного окна -- улучшение?
  handleFormChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  formRender = () => {
    const {
      state: { firstName, lastName, email, step, cardNumber },
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
      state: { step },
      formConditions,
      handleClickNextForm,
      handleTabClick
    } = this;

    return (
      <div>
        <div>
          {steps.map((stepName, index) => {
            const number = index + 1;
            return (
              <Step
                key={index}
                number={number}
                isSelected={step === number}
                isClickable={step > number}
                onClick={handleTabClick}
              >
                {stepName}
              </Step>
            );
          })}
        </div>

        <div className="container__buttons">{this.formRender()}</div>
        <div className="button">
          <button
            className="button-next"
            onClick={handleClickNextForm}
            disabled={!formConditions()}
            hidden={step === 3}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;

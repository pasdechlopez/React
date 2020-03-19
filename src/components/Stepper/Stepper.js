import React, { Component } from 'react';

import './Stepper.css';
import Step from './Step';

class Stepper extends Component {
  steps = ['Personal info', 'Card info', 'Success!'];

  handleTabClick = tabNumber => {
    const { setStep } = this.props;
    setStep(tabNumber);
  };

  tabClickHandlers = this.steps.map((stepName, index) =>
    this.handleTabClick.bind(this, index + 1)
  );

  render() {
    const {
      props: { step },
      steps,
      tabClickHandlers
    } = this;

    return (
      <div className="tab-panel">
        {steps.map((stepName, index) => {
          const number = index + 1;

          return (
            <Step
              key={index}
              number={number}
              isSelected={step === number}
              isClickable={step > number}
              onClick={tabClickHandlers[index]}
            >
              {stepName}
            </Step>
          );
        })}
      </div>
    );
  }
}

export default Stepper;

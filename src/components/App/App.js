import React, { Component } from 'react';
import './App.css';

import Stepper from '../Stepper';
import Form from '../Form';

class App extends Component {
  state = {
    step: 1
  };

  setStep = step => this.setState({ step });

  render() {
    const {
      state: { step },
      setStep
    } = this;

    const childProps = {
      step,
      setStep
    };

    return (
      <div className="container">
        <Stepper {...childProps} />
        <Form {...childProps} />
      </div>
    );
  }
}

export default App;

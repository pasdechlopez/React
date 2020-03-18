import React, { Component } from 'react';
import './PersonalInfo.css';

class PersonalInfo extends Component {
  formChange = event => {
    const { onChangeForm } = this.props;
    onChangeForm(event.target.name, event.target.value);
  };

  render() {
    return (
      <div className="info" data-test="personal-info">
        <h1 className="title">Личная информация</h1>
        <input
          name="firstName"
          placeholder="Введите имя"
          value={this.props.firstName}
          onChange={this.formChange}
        />
        <input
          name="lastName"
          placeholder="Введите фамилию"
          value={this.props.lastName}
          onChange={this.formChange}
        />
        <input
          name="email"
          placeholder="Введите email"
          value={this.props.email}
          onChange={this.formChange}
        />
      </div>
    );
  }
}

export default PersonalInfo;

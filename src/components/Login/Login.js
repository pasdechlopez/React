import React, { Component } from 'react';
import Followers from '../Followers';
import {authorize, getIsAuthorized} from '../../ducks';
import { connect } from 'react-redux';


export default class Login extends Component {
  state = {
    login: '',
    token: ''
  }

  componentDidUpdate() {

  };
  handleChange = () => {

  }

  handleSubmit = event => {
    return (
    event.key === 'Enter' &&
    event.state.login !== '' &&
    this.handleChange()
    );
  };

  if (this.props.isAuthorized) {
    return <Redirect to='/users/me'/>;
 }
  render() {

  

    return (

      <div className="login">
        <div className='login__login-input'>
         <input type='text' placeholder='type ur login' />
          
        </div>
        <div className='login__token-input'>
         <input type='text' placeholder='type ur token' />
          <button onChange={this.handleChange} onSubmit={this.handleSubmit}>
            Submit!
          </button>
        </div>
      </div>
        );
    }
}

const mapStateToProps = state => {
  return (
    isAuthorized.getIsAuthorized(state)
  );
};

const mapDispatchToProps = {
  authorize
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login);
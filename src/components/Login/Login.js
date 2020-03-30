import React from 'react';
import { connect } from 'react-redux';
import UserPage from '../UserPage/UserPage';
import { handleUsername, submitForm } from '../../actions/search';
import { authorize, handleToken, validToken } from '../../actions/auth';
import { setTokenApi } from '../../github';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    tokenValue: ''
  };

  changetokenValue = event => {
    this.setState({
      tokenValue: event.target.value
    });
  };

  handleSubmit = event => {
    return (
      event.key === 'Enter' &&
      this.state.tokenValue !== '' &&
      this.handleChange()
    );
  };

  handleChange = () => {
    this.props.authorize(this.state.tokenValue);
  };

  render() {
    const { isAuthorized, user, error } = this.props;

    if (user && user.login) {
      return <Redirect to="/users/me" />;
    }
    if (error && error.status) {
      return <div>Error: {error.status}</div>;
    }
    console.log(this.props, 'props from login');
    console.log(this.state, 'state from login');

    // console.log(this.props.handleToken('hello'), 'handleToken from login');

    return (
      <div className="login">
        <input
          type="text"
          placeholder="Type ur github token"
          name="token auth"
          onKeyPress={this.handleSubmit}
          onChange={this.changetokenValue}
          value={this.state.tokenValue}
          id="username"
        />
        <button className="auth-button" onClick={this.handleChange}>
          Submit!
        </button>
        {/* {user && user.name && <UserPage choosenUser={this.state.searchValue} />} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.tokenValue,
    isAuthorized: state.authReducer.isAuthorized,
    error: state.authReducer.error
    // user: state.authReducer.tokenValue
  };
};

export default connect(mapStateToProps, { authorize, handleToken })(Login);

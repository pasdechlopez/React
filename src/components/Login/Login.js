import React from 'react';
import { connect } from 'react-redux';
import UserPage from '../UserPage/UserPage';
import { handleUsername, submitForm } from '../../actions/search';
import { authorize, handleToken, validToken } from '../../actions/auth';
import { setTokenApi } from '../../github';
import { getIsAuthorized } from '../../reducers/auth';
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
    if (error) {
      return <div>Error: {error.status}</div>;
    }
    console.log(this.props, 'props from login');

    return (
      <div className="get-data">
        <input
          type="text"
          placeholder="Type ur github token"
          name="token auth"
          onKeyPress={this.handleSubmit}
          onChange={this.changetokenValue}
          id="username"
        />
        <button className="auth-button" onClick={this.handleChange}>
          Submit!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    validat: state.status,
    user: state.user,
    error: state.error,
    isAuthorized: state.isAuthorized
  };
};

export default connect(mapStateToProps, { authorize, handleToken, validToken })(
  Login
);

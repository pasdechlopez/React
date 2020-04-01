import React from 'react';
import { connect } from 'react-redux';
import { authorize, handleToken } from '../../actions/auth';
import { Route, Redirect } from 'react-router-dom';

class Login extends React.Component {
  componentDidMount() {
    const { isAuthorized } = this.props;
    const currentToken = localStorage.getItem('currentToken');
    if (!isAuthorized && currentToken !== null) {
      this.props.authorize(currentToken, {
        token: currentToken
      });
    }
  }
  state = {
    currentToken: ''
  };

  changetokenValue = event => {
    this.setState({
      currentToken: event.target.value
    });
  };

  handleSubmit = event => {
    return (
      event.key === 'Enter' &&
      this.state.currentToken !== '' &&
      this.handleChange()
    );
  };

  handleChange = () => {
    const { currentToken } = this.state;
    const { user } = this.props;
    localStorage.setItem('currentToken', currentToken);
    localStorage.setItem('user', user ? user.login : '');
    this.props.authorize(this.state.currentToken, {
      token: this.state.currentToken
    });
  };

  render() {
    const { isAuthorized, user, error } = this.props;
    console.log(this.state.isAuthorized, 'LOGIN ');

    if (isAuthorized) {
      return <Redirect push to={'/users/me/'} />;
    }
    if (error && error.status) {
      return <div>Error: {error.status}</div>;
    }
    console.log(this.props, 'props from login');

    return (
      <div className="login">
        <input
          type="text"
          placeholder="Type ur github token"
          name="token auth"
          onKeyPress={this.handleSubmit}
          onChange={this.changetokenValue}
          value={this.state.currentToken}
          id="username"
        />
        <button className="auth-button button" onClick={this.handleChange}>
          Submit!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    isAuthorized: state.authReducer.isAuthorized,
    error: state.authReducer.error,
    token: state.authReducer.token
  };
};

export default connect(mapStateToProps, { authorize, handleToken })(Login);

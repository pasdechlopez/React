import React from 'react';
import { connect } from 'react-redux';
import { authorize } from '../../actions/auth';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  state = {
    currentToken: ''
  };

  handleTokenChange = event => {
    this.setState({
      currentToken: event.target.value
    });
  };

  handleHotkeySubmit = event => {
    const {
      state: { currentToken },
      handleAuth
    } = this;

    if (event.key === 'Enter' && currentToken !== '') {
      handleAuth();
    }
  };

  handleAuth = () => {
    const {
      state: { currentToken },
      props: { authorize, history }
    } = this;

    authorize(currentToken, history);
  };

  componentDidMount() {
    const {
      props: { isAuthorized },
      handleAuth
    } = this;

    if (!isAuthorized) {
      handleAuth();
    }
  }

  render() {
    const {
      state: { currentToken },
      props: { error },
      handleAuth,
      handleTokenChange,
      handleHotkeySubmit
    } = this;

    if (error && error.status) {
      return <div>Error: {error.status}</div>;
    }

    return (
      <div className="login">
        <input
          type="text"
          placeholder="Type ur github token"
          name="token auth"
          value={currentToken}
          onKeyPress={handleHotkeySubmit}
          onChange={handleTokenChange}
          id="username"
        />
        <button className="auth-button button" onClick={handleAuth}>
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
    token: state.authReducer.token,
    isFetched: state.authReducer.isFetchedAuth
  };
};

export default connect(mapStateToProps, { authorize })(withRouter(Login));

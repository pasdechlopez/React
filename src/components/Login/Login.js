import React from 'react';
import { connect } from 'react-redux';
import { authorize } from '../../actions/auth';
import { withRouter } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../localStorage';
class Login extends React.Component {
  state = {
    currentToken: ''
  };

  componentDidMount() {
    const token = getTokenFromLocalStorage();
    const {
      props: { authorize, history, isAuthorized }
    } = this;

    if (!isAuthorized && token !== null) {
      authorize();
    }
  }

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
    console.log(currentToken);
    authorize(currentToken);
    history.push('/users/me');
  };

  render() {
    const {
      state: { currentToken },
      props: {
        isAuthorized,
        error,
        history,
        match: { path }
      },
      handleAuth,
      handleTokenChange,
      handleHotkeySubmit,
      authorizing
    } = this;
    if (isAuthorized && path === '/') {
      history.push('/users/me');
    }
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

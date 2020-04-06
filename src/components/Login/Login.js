import React from 'react';
import { connect } from 'react-redux';
import { authorize } from '../../actions/auth';
import { withRouter } from 'react-router-dom';
<<<<<<< HEAD
import { getTokenFromLocalStorage } from '../../localStorage';
import { getIsAuthorized, getError } from '../../getters';
=======

>>>>>>> 83b494b31bb94f7b423fa1bf33f0c52b5fb7f216
class Login extends React.Component {
  state = {
    currentToken: ''
  };

<<<<<<< HEAD
  componentDidMount() {
    const token = getTokenFromLocalStorage();
    const {
      props: { authorize, isAuthorized }
    } = this;

    if (!isAuthorized && token !== null) {
      authorize();
    }
  }
  componentDidUpdate() {
    const {
      isAuthorized,
      history,
      match: { path }
    } = this.props;
    if (isAuthorized && path === '/') {
      history.push('/users/me');
    }
  }

=======
>>>>>>> 83b494b31bb94f7b423fa1bf33f0c52b5fb7f216
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
<<<<<<< HEAD
    authorize(currentToken);
    history.push('/users/me');
=======

    authorize(currentToken, history);
>>>>>>> 83b494b31bb94f7b423fa1bf33f0c52b5fb7f216
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
    isAuthorized: getIsAuthorized(state),
    error: getError(state)
  };
};

export default connect(mapStateToProps, { authorize })(withRouter(Login));

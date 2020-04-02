import React from 'react';
import { connect } from 'react-redux';
import { authorize } from '../../actions/auth';
import { withRouter, Redirect } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../localStorage';
import Spinner from 'react-bootstrap/Spinner';
class Login extends React.Component {
  state = {
    currentToken: ''
  };

  componentDidMount() {
    const token = getTokenFromLocalStorage();
    const {
      props: { authorize, history, isAuthorized }
    } = this;
    // authorize();
    if (!isAuthorized && token !== null) {
      authorize();
    }
    // }
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
  };

  render() {
    const {
      state: { currentToken },
      props: { isAuthorized, error, history },
      handleAuth,
      handleTokenChange,
      handleHotkeySubmit,
      authorizing
    } = this;

    if (isAuthorized) {
      history.push('/users/me');
    }
    // if (error && error.status) {
    //   return <div>Error: {error.status}</div>;
    // }
    console.log(this.props, 'props from login');

    return (
      <div className="login">
        {authorizing && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
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
    token: state.authReducer.token
  };
};

export default connect(mapStateToProps, { authorize })(withRouter(Login));

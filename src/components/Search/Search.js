import React from 'react';
import { connect } from 'react-redux';
import { handleUser, submitForm } from '../../actions/search';
import { handleFollowers } from '../../actions/followers';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';

class Search extends React.Component {
  state = {
    searchValue: ''
  };

  changeSearchValue = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleSubmit = event => {
    return (
      event.key === 'Enter' &&
      this.state.searchValue !== '' &&
      this.handleChange()
    );
  };

  handleChange = () => {
    this.props.submitForm(this.state.searchValue, {
      currentToken: localStorage.getItem('currentToken')
    });
    this.props.handleFollowers();
  };

  render() {
    const { foundUser, error } = this.props;
    console.log(this.props, 'props from search');

    return (
      <div className="search">
        <input
          type="text"
          placeholder="Type a user's login"
          name="username"
          onKeyPress={this.handleSubmit}
          onChange={this.changeSearchValue}
          id="username"
          value={this.state.searchValue}
        />

        <button className="login-button button" onClick={this.handleChange}>
          Search!
        </button>

        {error && foundUser.name !== '' && (
          <div className="handle-failure">No user found</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foundUser: state.searchReducer.foundUser,
    error: state.error,
    token: state.authReducer.token.token
  };
};

export default connect(mapStateToProps, {
  handleUser,
  submitForm,
  handleFollowers
})(withRouter(Search));

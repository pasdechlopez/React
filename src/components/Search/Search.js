import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/search';
import { fetchFollowers } from '../../actions/followers';
import { withRouter } from 'react-router-dom';
import { getFoundUser, getError } from '../../getters';

export class Search extends React.Component {
  state = {
    searchValue: ''
  };

  changeSearchValue = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleSubmit = event => {
    const {
      state: { searchValue },
      handleChange
    } = this;
    event.key === 'Enter' && handleChange();
  };

  handleChange = () => {
    const {
      props: { fetchUser, history },
      state: { searchValue }
    } = this;
    if (searchValue !== '') {
      fetchUser(searchValue);
      history.push(`/users/${searchValue}`);
    }
  };

  render() {
    const {
      props: { foundUser, error },
      state: { searchValue },
      handleChange,
      handleSubmit,
      changeSearchValue
    } = this;

    return (
      <div className="search">
        <input
          type="text"
          placeholder="Type a user's login"
          name="username"
          onKeyPress={handleSubmit}
          onChange={changeSearchValue}
          id="username"
          value={searchValue}
        />

        <button className="login-button button" onClick={handleChange}>
          Search!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foundUser: getFoundUser(state),
    error: getError(state)
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchFollowers
})(withRouter(Search));

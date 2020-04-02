import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, authorize } from '../../actions/auth';
import { fetchUser } from '../../actions/search';
import { handleFollowers, handleFailure } from '../../actions/followers';

import { Route, Redirect, withRouter } from 'react-router-dom';
import Followers from '../Followers/Followers';
// import Search from '../Search/Search';

export class UserPage extends Component {
  componentDidMount() {
    const {
      props: {
        fetchUser,
        match: {
          params: { id }
        }
      }
    } = this;
    fetchUser(id);
  }
  componentDidUpdate(prevProps) {
    const {
      fetchUser,
      match: {
        params: { id: prevId }
      }
    } = prevProps;
    const {
      handleFollowers,
      match: {
        params: { id }
      }
    } = this.props;
    if (prevId !== id) {
      fetchUser(id);
    }
  }

  render() {
    const {
      user,
      isAuthorized,
      followers,
      handleFollowers,
      logout,
      foundUser,
      history,
      isFetching,
      isFetched,
      match: {
        path,
        params: { id }
      }
    } = this.props;
    const logOut = () => {
      logout();
      localStorage.removeItem('currentToken');
    };
    console.log(this.props, 'props from userpage');
    const pushURL = () => {
      history.replace(`/users/${foundUser.login}`);
    };

    if (!foundUser.login && isFetched) {
      return <div className="handle-error">NO USER FOUND</div>;
    }
    if (isFetching) {
      return <div>Fetching...</div>;
    }
    if (!isAuthorized && path == '/users/me') {
      history.push('/');
    }

    return (
      <div className="user-info">
        {/* <Search /> */}
        <Link to="/">
          <button className="button" onClick={logOut}>
            {' '}
            LOG OUT
          </button>
        </Link>
        {id !== 'me' && (
          <button className="button" onClick={() => history.goBack()}>
            {' '}
            PREV PAGE
          </button>
        )}
        <div className="user-info__main">
          <div className="user-info__text-main">
            {' '}
            {<h2>Name: {foundUser.name}</h2>}
            {<h3>Id: {foundUser.id}</h3>}
          </div>

          <div className="user-info__text">
            {
              <div className="user-info__text-wrapper">
                <div className="user-info__text-header">Login: </div>{' '}
                {user.login}
              </div>
            }
            {
              <div className="user-info__text-wrapper">
                {' '}
                <div className="user-info__text-header">Company: </div>{' '}
                {user.company}
              </div>
            }
            {
              <div className="user-info__text-wrapper">
                <div className="user-info__text-header">Blog: </div>{' '}
                <a href={`${user.blog}`}>{user.blog}</a>
              </div>
            }
            {
              <div className="user-info__text-wrapper">
                {' '}
                <div className="user-info__text-header">Location: </div>{' '}
                {user.location}
              </div>
            }
          </div>
        </div>
        <div className="user_info__addition">
          {user.avatar_url && (
            <img src={user.avatar_url} className="user-image" width="110px" />
          )}
          <p className="user-info__followers user-info">
            Followers: {user.followers}
          </p>
          <p className="user-info__following user-info">
            Following: {user.following}
          </p>
        </div>
        <br />

        {isFetched && (
          <Followers
          // id={foundUser.login}
          // followers={followers}
          // isFetched={isFetched}
          // handleFollowers={handleFollowers}
          // followers={followers}
          />
        )}

        {/* <Followers user={user} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    all: state,
    // params: state.match.params,
    user: state.searchReducer.foundUser,
    isAuthorized: state.authReducer.isAuthorized,
    token: state.authReducer.token.token,
    followers: state.followersReducer.followers,
    foundUser: state.searchReducer.foundUser,
    currentId: state.searchReducer.foundUser.login,
    isFetching: state.searchReducer.isFetching,
    isFetched: state.searchReducer.isFetched
  };
};

export default connect(mapStateToProps, { logout, fetchUser, handleFollowers })(
  withRouter(UserPage)
);

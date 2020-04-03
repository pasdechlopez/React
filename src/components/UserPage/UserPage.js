import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { fetchUser } from '../../actions/search';
import { handleFollowers } from '../../actions/followers';

import { withRouter } from 'react-router-dom';
import Followers from '../Followers/Followers';
import Search from '../Search/Search';

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
      logout,
      foundUser,
      history,
      isFetching,
      isFetched,
      match: {
        params: { id }
      }
    } = this.props;

    if (isFetching) {
      return <div>Fetching...</div>;
    }

    if (!foundUser.login) {
      return (
        <div className="handle-error">
          <span>NO USER FOUND</span>{' '}
          <button className="button" onClick={() => history.push('/users/me')}>
            HOME
          </button>
        </div>
      );
    }

    return (
      <div className="user-info">
        <Search />
        {id === 'me' ? (
          <Link to="/">
            <button className="button" onClick={logout}>
              {' '}
              LOG OUT
            </button>
          </Link>
        ) : (
          <Fragment>
            <button className="button" onClick={() => history.goBack()}>
              {' '}
              PREV PAGE
            </button>{' '}
            <button
              className="button"
              onClick={() => history.push('/users/me')}
            >
              HOME
            </button>
          </Fragment>
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
                Login: {foundUser.login}
              </div>
            }
            {
              <div className="user-info__text-wrapper">
                {' '}
                <div className="user-info__text-header span-f-data">
                  Company:{' '}
                </div>{' '}
                {foundUser.company}
              </div>
            }
            {
              <div className="user-info__text-wrapper">
                <div className="user-info__text-header span-f-data">Blog: </div>{' '}
                <a href={`${foundUser.blog}`}>{foundUser.blog}</a>
              </div>
            }
            {
              <div className="user-info__text-wrapper">
                {' '}
                <div className="user-info__text-header span-f-data">
                  Location:{' '}
                </div>{' '}
                {foundUser.location}
              </div>
            }
          </div>
        </div>
        <div className="user_info__addition">
          {foundUser.avatar_url && (
            <img
              src={foundUser.avatar_url}
              className="user-image"
              width="110px"
            />
          )}
          <p className="user-info__followers user-info">
            Followers: {foundUser.followers}
          </p>
          <p className="user-info__following user-info">
            Following: {foundUser.following}
          </p>
        </div>
        <br />

        {isFetched && <Followers />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    followers: state.followersReducer.followers,
    foundUser: state.searchReducer.foundUser,
    isFetching: state.searchReducer.isFetching,
    isFetched: state.searchReducer.isFetched
  };
};

export default connect(mapStateToProps, { logout, fetchUser, handleFollowers })(
  withRouter(UserPage)
);

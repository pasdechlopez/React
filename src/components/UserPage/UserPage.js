import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { handleFollowers } from '../../actions/followers';
import { logout, authorize } from '../../actions/auth';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Followers } from '../Followers/Followers';

export class UserPage extends Component {
  componentDidMount() {
    // const {props: {match: {params: {id}}}} = this;
    // fetchUser(id) -> saga: if id === 'me' fetchMe else fetchById(id)
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
      params: { id }
    } = this.props;
    const logOut = () => {
      logout();
      localStorage.removeItem('currentToken');
    };
    console.log(this.props, 'props from userpage');
    console.log('state from userpage', this.state);
    const pushURL = () => {
      history.replace(`/users/${foundUser.login}`);
    };

    if (id)
      if (!user) {
        return <div className="handle-error">NO USER FOUND</div>;
      }

    return (
      <div className="user-info">
        <Search />
        <Link to="/">
          <button className="button" onClick={logOut}>
            {' '}
            LOG OUT
          </button>
        </Link>
        <div className="user-info__main">
          <div className="user-info__text-main">
            {' '}
            {<h2>Name: {user.name}</h2>}
            {<h3>Id: {user.id}</h3>}
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
            <button
              className="button"
              onClick={() =>
                handleFollowers(user.login, {
                  currentToken: localStorage.getItem('currentToken')
                })
              }
            >
              Followers: {user.followers}
            </button>
          </p>
          <p className="user-info__following user-info">
            Following: {user.following}
          </p>
        </div>
        <br />
        {followers && <div>{<Followers followers={followers} />}</div>}
        {/* <Followers user={user} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    all: state,
    user: state.authReducer.user,
    isAuthorized: state.authReducer.isAuthorized,
    token: state.authReducer.token.token,
    followers: state.followersReducer.followers,
    foundUser: state.searchReducer.foundUser
  };
};

export default connect(mapStateToProps, { handleFollowers, logout, authorize })(
  withRouter(UserPage)
);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { handleFollowers } from '../../actions/followers';
import { logout, authorize } from '../../actions/auth';
import { Route, Redirect, withRouter, useHistory } from 'react-router-dom';
import { Followers } from '../Followers/Followers';
import { handleUser, submitForm } from '../../actions/search';

export class UserPage extends Component {
  componentDidMount() {
    const { handleFollowers, user, token, location } = this.props;
    this.props.authorize(localStorage.getItem('currentToken'), {
      token: localStorage.getItem('currentToken')
    });
    this.props.submitForm(location.pathname.split('/')[2], {
      currentToken: localStorage.getItem('currentToken')
    });
  }
  fetchFollowers = () => {
    handleFollowers(this.props.user.login, {
      currentToken: localStorage.getItem('currentToken')
    });
  };
  render() {
    const {
      user,
      choosenUser,
      isAuthorized,
      followers,
      handleFollowers,
      history,
      location,
      searchResult
    } = this.props;
    console.log(this.props, 'props from follower');
    console.log(location.pathname.split('/')[2], 'location from follower');
    console.log(choosenUser, 'choosenUser from follower');
    const foundUser = choosenUser;
    console.log(foundUser, 'foundUSer from follower');

    const pushURL = () => {
      history.push('/users/me');
    };

    if (!isAuthorized) {
      return <Redirect push to="/" />;
    }
    if (typeof choosenUser == 'string') {
      return (
        <div>
          <span>Not found</span>{' '}
          <button className="button" onClick={this.props.history.goBack}>
            Back
          </button>
        </div>
      );
    }
    if (searchResult === '') {
      return <div>Fetching...</div>;
    } else if (searchResult !== '') {
      return (
        <div className="user-info">
          <button onClick={this.props.history.goBack}>Back</button>
          <div className="user-info__main">
            <div className="user-info__text-main">
              {' '}
              {<h2>Name: {choosenUser.name}</h2>}
              {<h3>Id: {choosenUser.id}</h3>}
            </div>

            <div className="user-info__text">
              {
                <div className="user-info__text-wrapper">
                  <div className="user-info__text-header">Login: </div>{' '}
                  {choosenUser.login}
                </div>
              }
              {
                <div className="user-info__text-wrapper">
                  {' '}
                  <div className="user-info__text-header">Company: </div>{' '}
                  {choosenUser.company}
                </div>
              }
              {
                <div className="user-info__text-wrapper">
                  <div className="user-info__text-header">Blog: </div>{' '}
                  <a href={`${choosenUser.blog}`}>{choosenUser.blog}</a>
                </div>
              }
              {
                <div className="user-info__text-wrapper">
                  {' '}
                  <div className="user-info__text-header">Location: </div>{' '}
                  {choosenUser.location}
                </div>
              }
            </div>
          </div>
          <div className="user_info__addition">
            {choosenUser.avatar_url && (
              <img
                src={choosenUser.avatar_url}
                className="user-image"
                width="110px"
              />
            )}
            <p className="user-info__followers user-info">
              {choosenUser.followers > 0 ? (
                <button
                  onClick={() =>
                    handleFollowers(choosenUser.login, {
                      currentToken: localStorage.getItem('currentToken')
                    })
                  }
                >
                  Followers: {choosenUser.followers}
                </button>
              ) : (
                <p className="user-info__followers user-info">
                  Followers: {choosenUser.followers}{' '}
                </p>
              )}
            </p>
            <p className="user-info__following user-info">
              Following: {choosenUser.following}
            </p>
          </div>
          <br />
          {followers && <div>{<Followers followers={followers} />}</div>}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    searchResult: state.searchReducer.username,
    user: state.authReducer.user,
    isAuthorized: state.authReducer.isAuthorized,
    token: state.authReducer.token.token,
    followers: state.followersReducer.followers,
    choosenUser: state.searchReducer.foundUser
  };
};

export default connect(mapStateToProps, {
  handleFollowers,
  logout,
  authorize,
  submitForm
})(withRouter(UserPage));

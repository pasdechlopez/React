import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { handleFollowers } from '../../actions/search';
import { logout } from '../../actions/auth';
import { Route } from 'react-router-dom';

export class UserPage extends Component {
  render() {
    const { user, choosenUser, handleFollowers, isAuthorized } = this.props;
    console.log(this.props, 'props from userpage');
    console.log('state from userpage', this.state);

    if (user === undefined) {
      return <div className="handle-error">NO USER FOUND</div>;
    }
    if (isAuthorized === false) {
      return <Route to="/" />;
    }
    return (
      <div className="user-info">
        <Search />
        <button onClick={this.props.logout}> LOG OUT</button>
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
            <Link to="/followers" onClick={() => handleFollowers(choosenUser)}>
              Followers: {user.followers}
            </Link>
          </p>
          <p className="user-info__following user-info">
            Following: {user.following}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.tokenValue,
    isAuthorized: state.authReducer.isAuthorized,
    token: state.authReducer.token.token
  };
};

export default connect(mapStateToProps, { handleFollowers, logout })(UserPage);

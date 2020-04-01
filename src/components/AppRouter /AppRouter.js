import React, { Fragment } from 'react';
import UserPage from '../UserPage/UserPage';
import Login from '../Login/Login';
import Search from '../Search/Search';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import { Switch, Route, withRouter, Redirect, Link } from 'react-router-dom';
import './AppRouter.css';
import Follower from '../Follower/Follower';
import { connect } from 'react-redux';
import { logout, authorize } from '../../actions/auth';

export class AppRouter extends React.Component {
  logout = () => {
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentUser');
  };
  render() {
    const isAuthorized = localStorage.getItem('currentToken') !== null;
    console.log('APPROUTER props', this.props);

    return (
      <div className="app">
        {/* {isAuthorized && (
          <Link to="/">
            <button className="button" onClick={this.logout}>
              {' '}
              LOG OUT
            </button>
          </Link>
        )} */}
        <Switch>
          <PrivateRoute
            path="/users/me"
            component={UserPage}
            isAuthorized={isAuthorized}
            exact
          />
          <PrivateRoute
            path="/users/:id"
            component={Follower}
            isAuthorized={isAuthorized}
            // choosenUser={this.props.foundUser}
            exact
          />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    all: state,
    isAuthorized: state.authReducer.isAuthorized,
    choosenUser: state.searchReducer.foundUser
  };
};

export default withRouter(
  connect(mapStateToProps, { logout })(withRouter(AppRouter))
);

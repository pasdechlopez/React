import React from 'react';
import UserPage from '../UserPage/UserPage';
import Login from '../Login/Login';
import Search from '../Search/Search';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './AppRouter.css';
import Followers from '../Followers/Followers';
import { connect } from 'react-redux';

export class AppRouter extends React.Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {isAuthorized && (
            <Route path="/users/me" exact>
              <UserPage />
            </Route>
          )}
          <Route path="/followers" exact>
            <Followers />
          </Route>
          {!isAuthorized && (
            <Redirect path="/" exact>
              <Login />
            </Redirect>
          )}
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthorized: state.authReducer.isAuthorized
  };
};

export default withRouter(connect(mapStateToProps, null)(AppRouter));

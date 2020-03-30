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
          <Route exact component={Login} path="/" />
          {isAuthorized && (
            <Route path="/users/:id" component={UserPage} exact />
          )}
          <Route path="/:id/followers" exact>
            <Followers />
          </Route>
          {/* {!isAuthorized && <Route path="/" exact />} */}
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

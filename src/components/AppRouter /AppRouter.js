import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './AppRouter.css';

import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UserPage from '../UserPage/UserPage';

export class AppRouter extends React.Component {
  render() {
    const { isAuthorized } = this.props;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />

          <PrivateRoute
            exact
            path="/users/:id"
            component={UserPage}
            isAuthorized={isAuthorized}
          />
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

export default connect(mapStateToProps)(AppRouter);

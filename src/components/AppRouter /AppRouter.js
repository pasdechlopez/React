import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './AppRouter.css';

import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UserPage from '../UserPage/UserPage';
import { getIsAuthorized } from '../../getters';

export class AppRouter extends React.Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute
            isAuthorized={isAuthorized}
            component={UserPage}
            path="/users/:id"
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthorized: getIsAuthorized(state)
  };
};
export default connect(mapStateToProps)(AppRouter);

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import './AppRouter.css';

import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UserPage from '../UserPage/UserPage';

export class AppRouter extends React.Component {
  render() {
    const {
      isAuthorized,
      location: { pathname }
    } = this.props;
    console.log(this.props, 'approuter');
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute
            component={UserPage}
            isAuthorized={isAuthorized}
            path="/users/:id"
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

export default connect(mapStateToProps)(withRouter(AppRouter));

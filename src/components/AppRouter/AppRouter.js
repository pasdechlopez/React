import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Login from '../Login/Login';
import {
  getIsAuthorized,
  getIsNetworkErrorPresent,
  getMessage
} from '../../ducks';
import { connect } from 'react-redux';

export class AppRouter extends React.Component {
  render() {
    // const { isAuthorized, isError, errorMessage } = this.props;
    return (
      <div className="app-router">
        <Switch>
          <Route path="/login" component={Login} exact />
          {/* <Route path="/users/me" component={} exact />
          <PrivateRoute path="/user/:name" /> */}
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthorized: getIsAuthorized(state),
//     isErrorExist: getIsNetworkErrorPresent(state),
//     errorMessage: getMessage(state)
//   };
// };

// const mapDispatchToProps = {
//   // logout
// };
// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(AppRouter)
// );

export default withRouter(connect()(AppRouter));

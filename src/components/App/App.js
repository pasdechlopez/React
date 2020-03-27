import React from 'react';
import UserPage from '../UserPage/UserPage';
import Login from '../Login/Login';
import Search from '../Search/Search';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './App.css';
import Followers from '../Followers/Followers';
import Follower from '../Followers/Follower';
import { authorize, logout } from '../../actions/auth';
import { connect } from 'react-redux';
import { getIsAuthorized } from '../../reducers/auth';

export class App extends React.Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/users/me" isAuthorized={isAuthorized} exact>
            <UserPage />
          </Route>
          <PrivateRoute path="/followers" component={Followers} />
          <PrivateRoute path="/users/:id">
            <Follower />
          </PrivateRoute>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthorized: state.user,
    token: state.token,
    status: state.status
    // isErrorExist: getIsNetworkErrorPresent(state),
    // errorMessage: getMessage(state)
  };
};

export default withRouter(connect(mapStateToProps, { authorize, logout })(App));

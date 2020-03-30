import React from 'react';
import UserPage from '../UserPage/UserPage';
import Login from '../Login/Login';
import Search from '../Search/Search';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './App.css';
import Followers from '../Followers/Followers';
import Follower from '../Followers/Follower';
import { authorize, logout } from '../../actions/auth';
import { connect } from 'react-redux';
import { getIsAuthorized } from '../../reducers/auth';

export class App extends React.Component {
  render() {
    // console.log('ROUTE PROPS', this.props);
    const { isAuthorized } = this.props;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {isAuthorized && (
            <Route to="/users/me" exact>
              <UserPage />
            </Route>
          )}
          {!isAuthorized && (
            <Redirect to="/" exact>
              <Login />
            </Redirect>
          )}
          <Route exact path="/followers">
            <Followers />
          </Route>{' '}
          {/* <PrivateRoute path="/users/me" component={UserPage} /> */}
          {/* <PrivateRoute path="/users/:id">
            <Follower />
          </PrivateRoute> */}
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthorized: state.authReducer.isAuthorized
    // isErrorExist: getIsNetworkErrorPresent(state),
    // errorMessage: getMessage(state)
  };
};

export default withRouter(connect(mapStateToProps, null)(App));

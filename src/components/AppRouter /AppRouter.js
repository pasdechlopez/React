import React, { Fragment } from 'react';
import UserPage from '../UserPage/UserPage';
import Login from '../Login/Login';
import Search from '../Search/Search';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './AppRouter.css';
import Follower from '../Follower/Follower';
import { connect } from 'react-redux';

export class AppRouter extends React.Component {
  componentDidMount() {
    const currentToken = localStorage.getItem('currentToken');
    const currentUser = currentToken ? localStorage.getItem('user') : '';
    this.setState({ currentToken, currentUser });
  }
  logout = () => {
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentUser');
  };
  render() {
    const isAuthorized = localStorage.getItem('currentToken') !== null;
    console.log('APPROUTER props', this.props);

    return (
      <div className="app">
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
            choosenUser={this.props.foundUser}
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
    isAuthorized: state.authReducer.isAuthorized,
    choosenUser: state.searchReducer.foundUser
  };
};

export default withRouter(connect(mapStateToProps, null)(AppRouter));

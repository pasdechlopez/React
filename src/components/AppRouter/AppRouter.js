import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

export default class AppRouter extends React.Component {

  render() {
    return (
    <div className="app-router">
      <Switch>
        <Route path="/users/me" component={} exact />
        <PrivateRoute path="/user/:name" />
        <Route path="/login" component={} exact />
      </Switch>
    </div>
    );
  }
}
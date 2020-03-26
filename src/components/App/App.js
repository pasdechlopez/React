import React from 'react';
import UserPage from '../UserPage/UserPage';
import Login from '../Login/Login';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Followers from '../Followers/Followers';
import Follower from '../Followers/Follower';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/followers" component={Followers} />
          <Route path="/followers/:id">
            <Follower />
          </Route>
        </Switch>
      </div>
    );
  }
}

import React from 'react';
import UserPage from '../UserPage/UserPage';
import Login from '../Login/Login';
import { Switch } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Login />
        </Switch>
      </div>
    );
  }
}

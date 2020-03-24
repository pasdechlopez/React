import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ShowPage from '../ShowPage';
import Search from '../Search';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

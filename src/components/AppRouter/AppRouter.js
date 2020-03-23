import React from 'react';
import ShowPage from '../ShowPage';
import Search from '../Search';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/show/:id" component={ShowPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

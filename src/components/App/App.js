import React, { PureComponent } from 'react';
import { Switch, withRouter, Route, Link } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

import Public from '../Public';
import Login from '../Login';
import Private from '../Private';
import PrivateRoute from '../PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <div className="router">
        <AuthorizeProvider>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/login">Войти</Link>
                </li>
                <li
                >
                  <Link to="/private">Секретная страница</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/" component={Public} exact />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
            </Switch>
          </div>
        </AuthorizeProvider>
      </div>
    );
  }
}

export default withRouter(App);

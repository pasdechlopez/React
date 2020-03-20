import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {

    const { isAuthorized, ...rest } = this.props;
    rest.authorizeUser && delete rest.authorizeUser;

    return isAuthorized ? (
      <Route {...rest}/>
    ) : (
      <Redirect to="/login" />
    );
    

    // return (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
    //     }
    //   />
    // );
  }
}

export default AuthHOC(PrivateRoute);

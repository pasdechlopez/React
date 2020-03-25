import React from 'react';
import { AuthHoc } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';
import { AuthHOC } from 'components/AuthorizeProvider';

 export default class PrivateRoute extends React.Component {
  render() {
    const { isAuthorized, ...rest } = this.props;
    rest.authorizeUser && delete rest.authorizeUser;
    return isAuthorized ? <Route {...rest} /> : <Redirect to="/login" />;

}

// export default AuthHOC(PrivateRoute);
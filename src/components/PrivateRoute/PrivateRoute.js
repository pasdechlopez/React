import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthorized, ...rest }) =>
  isAuthorized ? <Route {...rest} /> : <Redirect to="/" />;

export default PrivateRoute;

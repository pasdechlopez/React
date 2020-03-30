import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  render() {
    const { component: PureComponent, isAuthorized, ...rest } = this.props;
    return (
      <Route
        isAuthorized={isAuthorized}
        {...rest}
        render={props =>
          isAuthorized ? <PureComponent {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}
const mapStateToProps = state => ({
  isAuthorized: state.authReducer.isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);

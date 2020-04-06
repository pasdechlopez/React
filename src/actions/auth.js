import { createActions } from 'redux-actions';

export const {
  authorize,
  authorizeSuccess,
  authorizeFailure,
  logout
} = createActions(
  {
    AUTHORIZE: [payload => payload, (payload, meta = {}) => meta],
    AUTHORIZE_SUCCESS: [payload => payload, (payload, meta = {}) => meta]
  },
  'AUTHORIZE_FAILURE',
  'LOGOUT'
);

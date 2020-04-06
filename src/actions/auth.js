import { createActions } from 'redux-actions';

export const {
  authorize,
  authorizeSuccess,
  authorizeFailure,
  logout
} = createActions(
  { AUTHORIZE_SUCCESS: [payload => payload, (payload, meta = {}) => meta] },
  'AUTHORIZE',
  'AUTHORIZE_FAILURE',
  'LOGOUT'
);

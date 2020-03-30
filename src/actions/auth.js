import { createActions } from 'redux-actions';

export const {
  authorize,
  logout,
  handleToken,
  validToken,
  handleError
} = createActions(
  'AUTHORIZE',
  'LOGOUT',
  'HANDLE_TOKEN',
  'AUTHORIZED',
  'HANDLE_ERROR'
);

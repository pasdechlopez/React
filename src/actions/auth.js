import { createActions } from 'redux-actions';

export const { authorize, logout, handleToken, validToken } = createActions(
  'AUTHORIZE',
  'LOGOUT',
  'HANDLE_TOKEN',
  'AUTHORIZED'
);

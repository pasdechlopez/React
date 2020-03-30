import { createActions } from 'redux-actions';

export const { authorize, logout, handleError } = createActions(
  { AUTHORIZE: [payload => payload, (payload, meta) => meta] },
  'LOGOUT',
  'HANDLE_ERROR'
);

export const { handleToken } = createActions({
  HANDLE_TOKEN: [payload => payload, (payload, meta) => meta]
});

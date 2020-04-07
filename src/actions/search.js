import { createActions } from 'redux-actions';

export const { fetchUser, fetchUserSuccess, fetchUserFailure } = createActions(
  { FETCH_USER: [payload => payload, (payload, meta) => meta] },
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE'
);

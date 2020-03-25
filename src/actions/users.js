import { createActions } from 'redux-actions';

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} = createActions(
  {
    FETCH_REQUEST: [payload => payload]
  },
  {
    FETCH_SUCCESS: [payload => payload]
  },
  'FETCH_FAILURE'
);

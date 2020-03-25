import { createActions } from 'redux-actions';

export const {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} = createActions(
  {
    FETCH_REQUEST: [payload => payload]
  },
  {
    FETCH_SUCCESS: [payload => payload]
  },
  'FETCH_FAILURE'
);

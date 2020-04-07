import { createActions } from 'redux-actions';

export const {
  fetchFollowers,
  handleFollowersSuccess,
  handleFollowersFailure
} = createActions(
  'FETCH_FOLLOWERS',
  'HANDLE_FOLLOWERS_SUCCESS',
  'HANDLE_FOLLOWERS_FAILURE'
);

import { createActions } from 'redux-actions';

export const {
  handleUsername,
  submitForm,
  handleFollowers,
  searchSuccess,
  handleFailure,
  handleFollowersPage
} = createActions(
  'HANDLE_USERNAME',
  'SUBMIT_FORM',
  'HANDLE_FOLLOWERS',
  'SEARCH_SUCCESS',
  'HANDLE_FAILURE',
  'HANDLE_FOLLOWERS_PAGE'
);

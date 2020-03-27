import { createActions } from 'redux-actions';

export const {
  handleSuccess,
  submitForm,
  handleFollowers,
  searchSuccess,
  handleFailure,
  handleFollowersPage
} = createActions(
  'HANDLE_SUCCESS',
  'SUBMIT_FORM',
  'HANDLE_FOLLOWERS',
  'SEARCH_SUCCESS',
  'HANDLE_FAILURE',
  'HANDLE_FOLLOWERS_PAGE'
);

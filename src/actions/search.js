import { createActions } from 'redux-actions';

export const {
  handleUsername,
  submitForm,
  handleFollowers,
  searchSuccess,
  searchFailure
} = createActions(
  'HANDLE_USERNAME',
  'SUBMIT_FORM',
  'HANDLE_FOLLOWERS',
  'SEARCH_SUCCESS',
  'SEARCH_FAILURE'
);

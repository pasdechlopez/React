import { createActions } from 'redux-actions';

export const {
  submitForm,

  handleSuccess,
  handleFollowers,
  searchSuccess,
  handleFailure,
  handleFollowersPage
} = createActions(
  { SUBMIT_FORM: [payload => payload, (payload, meta) => meta] },
  'HANDLE_SUCCESS',
  'HANDLE_FOLLOWERS',
  'SEARCH_SUCCESS',
  'HANDLE_FAILURE',
  'HANDLE_FOLLOWERS_PAGE'
);

import { createActions } from 'redux-actions';

export const {
  fetchUser,
  handleUser,
  searchSuccess,
  searchFailure
} = createActions(
  { FETCH_USER: [payload => payload, (payload, meta) => meta] },
  'HANDLE_USER',
  'SEARCH_SUCCESS',
  'SEARCH_FAILURE'
);

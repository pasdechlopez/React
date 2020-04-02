import { createActions } from 'redux-actions';

export const { handleFollowers, handleSuccess, handleFailure } = createActions(
  'HANDLE_FOLLOWERS',
  'HANDLE_SUCCESS',
  'HANDLE_FAILURE'
);

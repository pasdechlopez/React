import { createActions } from 'redux-actions';

export const { handleFollowers } = createActions({
  HANDLE_FOLLOWERS: [payload => payload, (payload, meta) => meta]
});

export const { handleSuccess, handleFailure } = createActions(
  'HANDLE_SUCCESS',
  'HANDLE_FAILURE'
);

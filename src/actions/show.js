import { createActions } from 'redux-actions';

export const { showRequest, showFailure, showSuccess } = createActions(
  'SHOW_REQUEST',
  'SHOW_FAILURE',
  'SHOW_SUCCESS'
);

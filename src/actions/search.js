import {createActions} from 'redux-actions';

export const { handleUsername, submitForm, handleFollowers } = createActions (
  'HANDLE_USERNAME',
  'SUBMIT_FORM',
  'HANDLE_FOLLOWERS'
);
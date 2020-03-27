import { handleActions } from 'redux-actions';
import {
  submitForm,
  handleUsername,
  handleFollowers,
  handleFailure
} from '../actions/search';

export default handleActions(
  {
    [handleUsername]: (state, action) => ({
      ...state,
      user: action.payload,
      error: ''
    }),
    [submitForm]: (state, action) => ({
      ...state,
      username: action.payload,
      error: '',
      choosenUser: action.payload.user
    }),
    [handleFailure]: (state, action) => ({
      ...state,
      username: '',
      error: action.payload
    }),
    [handleFollowers]: (state, action) => ({
      ...state,
      followers: action.payload,
      error: ''
    })
  },
  { user: {}, error: '', choosenUser: '', username: '', followers: {} }
);

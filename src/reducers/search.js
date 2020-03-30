import { handleActions } from 'redux-actions';
import {
  submitForm,
  handleSuccess,
  handleFollowers,
  handleFailure
} from '../actions/search';

const searchReducer = handleActions(
  {
    [handleSuccess]: (state, action) => ({
      ...state,
      user: action.payload,
      error: ''
    }),
    [submitForm]: (state, action, meta) => ({
      ...state,
      username: action.payload,
      token: action.meta,

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

export default searchReducer;

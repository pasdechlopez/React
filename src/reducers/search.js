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
    [submitForm]: (state, action) => ({
      ...state,
      username: action.payload,
      currentToken: action.meta
    }),
    [handleFailure]: (state, action) => ({
      ...state,
      username: '',
      error: action.payload
    })
  },
  {
    user: {},
    error: '',
    token: {},
    username: '',
    currentToken: {}
  }
);

export default searchReducer;

import { handleActions } from 'redux-actions';
import {
  submitForm,
  handleUser,
  handleFollowers,
  handleFailure
} from '../actions/search';

const searchReducer = handleActions(
  {
    [handleUser]: (state, action) => ({
      ...state,
      foundUser: action.payload,
      error: '',
      isFetching: false
    }),
    [submitForm]: (state, action) => ({
      ...state,
      username: action.payload,
      currentToken: action.meta,
      isFetching: true
    }),
    [handleFailure]: (state, action) => ({
      ...state,
      username: 'Not found',
      error: action.payload,
      foundUser: 'Not found'
    })
  },
  {
    user: {},
    error: '',
    token: {},
    username: '',
    currentToken: {},
    isFetching: false
  }
);

export default searchReducer;

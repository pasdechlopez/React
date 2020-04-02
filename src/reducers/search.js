import { handleActions } from 'redux-actions';
import {
  fetchUser,
  handleUser,
  handleFollowers,
  searchFailure
} from '../actions/search';

const searchReducer = handleActions(
  {
    [handleUser]: (state, action) => ({
      ...state,
      foundUser: action.payload,
      error: '',
      isFetching: false,
      isFetched: true
    }),
    [fetchUser]: (state, action) => ({
      ...state,
      username: action.payload,
      currentToken: action.meta,
      isFetching: true
    }),
    [searchFailure]: (state, action) => ({
      ...state,
      username: 'Not found',
      error: action.payload,
      foundUser: 'Not found',
      isFetching: false,
      isFetched: false
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

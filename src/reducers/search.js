import { handleActions } from 'redux-actions';
import {
  fetchUser,
  fetchUserFailure,
  fetchUserSuccess
} from '../actions/search';

const searchReducer = handleActions(
  {
    [fetchUserSuccess]: (state, action) => ({
      ...state,
      foundUser: action.payload,
      error: '',
      isFetching: false,
      isFetched: true
    }),
    [fetchUser]: (state, action) => ({
      ...state,
      foundUser: action.payload,
      currentToken: action.meta,
      isFetching: true,
      isFetched: false
    }),
    [fetchUserFailure]: (state, action) => ({
      ...state,
      foundUser: 'Not found',
      error: action.payload,
      isFetching: false,
      isFetched: false
    })
  },
  {
    user: {},
    error: '',
    username: '',
    foundUser: {},
    isFetching: false,
    isFetched: false
  }
);

export default searchReducer;

import { handleActions } from 'redux-actions';
import {
  fetchUser,
  handleFollowers,
  searchFailure,
  searchSuccess
} from '../actions/search';

const searchReducer = handleActions(
  {
    [searchSuccess]: (state, action) => ({
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
    [searchFailure]: (state, action) => ({
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

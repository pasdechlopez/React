import { handleActions } from 'redux-actions';
import {
  handleFollowers,
  handleSuccess,
  handleFailure
} from '../actions/followers';

const followersReducer = handleActions(
  {
    [handleFollowers]: (state, action) => ({
      ...state,
      username: action.payload,
      currentToken: action.meta,
      isFetchingFollowers: true
    }),
    [handleSuccess]: (state, action) => ({
      ...state,
      followers: action.payload,
      isFetchingFollowers: false
    }),
    [handleFailure]: (state, action) => ({
      ...state,
      followers: [],
      isFetchingFollowers: false
    })
  },
  {
    username: {},
    followers: [],
    isFetchingFollowers: false
  }
);

export default followersReducer;

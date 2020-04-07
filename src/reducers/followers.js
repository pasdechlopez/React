import { handleActions } from 'redux-actions';
import {
  fetchFollowers,
  handleFollowersSuccess,
  handleFollowersFailure
} from '../actions/followers';

const followersReducer = handleActions(
  {
    [fetchFollowers]: (state, action) => ({
      ...state,
      username: action.payload,
      currentToken: action.meta
    }),
    [handleFollowersSuccess]: (state, action) => ({
      ...state,
      followers: action.payload
    }),
    [handleFollowersFailure]: state => ({
      ...state,
      followers: []
    })
  },
  {
    username: {},
    followers: []
  }
);

export default followersReducer;

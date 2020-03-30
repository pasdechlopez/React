import { handleActions } from 'redux-actions';
import { handleFollowers, handleSuccess } from '../actions/followers';

const followersReducer = handleActions(
  {
    [handleFollowers]: (state, action) => ({
      ...state,
      username: action.payload,
      currentToken: action.meta
    }),
    [handleSuccess]: (state, action) => ({
      ...state,
      followers: action.payload
    })
  },
  {
    username: {},
    followers: [],
    token: {},
    currentToken: {}
  }
);

export default followersReducer;

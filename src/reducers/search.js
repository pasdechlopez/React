import { handleActions } from 'redux-actions';
import { submitForm, handleUsername, handleFollowers } from '../actions/search';

export default handleActions(
  {
    [handleUsername]: (state, action) => ({
      ...state,
      username: action.payload
    }),
    [submitForm]: (state, action) => ({
      ...state,
      username: action.payload,
      followersList: action.followersList
    })
  },
  {
    username: ''
  }
);

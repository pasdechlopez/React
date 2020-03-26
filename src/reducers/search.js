import { handleActions } from 'redux-actions';
import { submitForm, handleUsername, handleFollowers } from '../actions/search';

let initState = {
  username: '',
  repos: '',
  following: '',
  followers: '',
  grabbedData: false,
  message: '',
  image_url: '',
  followersList: {}
};

export default handleActions({
  [handleUsername]: (state = initState, action) => ({
    ...state,
    username: action.e.target.value
  }),
  [submitForm]: (state = initState, action) => ({
    ...state,
    choosenUser: action.data.login,
    repos: action.data.public_repos,
    following: action.data.following,
    followers: action.data.followers,
    image_url: action.data.avatar_url,
    message: action.data.message,
    followersList: action.followersList
  })
});

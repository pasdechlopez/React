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
      //     error: '',
      //   choosenUser: action.payload.user
    }),
    [handleFailure]: (state, action) => ({
      ...state,
      username: '',
      error: action.payload
    }),
    [handleFollowers]: (state, action) => ({
      ...state,
      followers: action.payload,
      error: ''
    })
  },
  {
    user: {},
    error: '',
    token: {},
    username: ''
  }
);

export default searchReducer;

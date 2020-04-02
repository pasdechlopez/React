import { handleActions } from 'redux-actions';
import {
  authorize,
  authorizeSuccess,
  authorizeFailure,
  logout
} from '../actions/auth';

const authReducer = handleActions(
  {
    [authorize]: (state, action) => ({
      ...state,
      authorizing: true,
      isFetchedAuth: false
    }),

    [authorizeSuccess]: (state, { payload: user, meta: token }) => ({
      ...state,
      authorizing: false,
      isAuthorized: true,
      token,
      user,
      isFetchedAuth: true
    }),

    [authorizeFailure]: (state, { payload: error }) => ({
      ...state,
      authorizing: false,
      isAuthorized: false,
      user: null,
      error,
      isFetchedAuth: true
    }),

    [logout]: state => ({
      ...state,
      isAuthorized: false
    })
  },
  {
    authorizing: false,
    isAuthorized: false,
    token: false,
    user: null,
    error: null,
    isFetchedAuth: false
  }
);

export default authReducer;

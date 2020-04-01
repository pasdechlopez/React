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
      authorizing: true
    }),

    [authorizeSuccess]: (state, { payload: user, meta: token }) => ({
      ...state,
      authorizing: false,
      isAuthorized: true,
      token,
      user
    }),

    [authorizeFailure]: (state, { payload: error }) => ({
      ...state,
      authorizing: false,
      isAuthorized: false,
      user: null,
      error
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
    error: null
  }
);

export default authReducer;

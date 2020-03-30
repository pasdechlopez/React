import { handleActions } from 'redux-actions';
import { authorize, logout, handleToken, handleError } from '../actions/auth';

const authReducer = handleActions(
  {
    [handleToken]: (state, action, meta) => ({
      user: action.payload,
      token: action.meta,
      isAuthorized: true
    }),
    [authorize]: (state, action) => ({
      ...state,
      user: action.payload,
      tokenValue: action.meta,
      error: ''
    }),
    [logout]: state => ({
      ...state,
      isAuthorized: false
    }),
    [handleError]: (state, action) => ({
      ...state,
      error: action.payload,
      tokenValue: {},
      isAuthorized: false
    })
  },
  {
    tokenValue: {},
    status: false,
    isAuthorized: false,
    token: {}
  }
);

export default authReducer;

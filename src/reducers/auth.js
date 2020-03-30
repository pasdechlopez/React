import { handleActions } from 'redux-actions';
import {
  authorize,
  logout,
  handleToken,
  validToken,
  handleError
} from '../actions/auth';

const authReducer = handleActions(
  {
    [handleToken]: (state, action) => ({
      tokenValue: action.payload,
      isAuthorized: true
    }),
    [authorize]: (state, action) => ({
      tokenValue: action.payload,
      error: ''
    }),
    [logout]: state => ({
      ...state,
      isAuthorized: false
    }),
    [validToken]: (state, action) => ({
      ...state,
      token: action.payload,
      error: '',
      isAuthorized: true
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
    isAuthorized: false
  }
);

export default authReducer;

// import { combineReducers } from 'redux';
// import { createActions, handleActions } from 'redux-actions';
// import { authorize, logout } from '../actions/auth';

// export const getIsAuthorized = state => state.isAuthorized;

// export default handleActions(
//   {
//     [authorize]: action => {
//       token: action.payload;
//     },
//     [logout]: () => false
//   },
//   { token: '', authorize: false }
// );

import { handleActions } from 'redux-actions';
import { authorize, logout, handleToken, validToken } from '../actions/auth';
import { handleSuccess } from '../actions/search';

export default handleActions(
  {
    [handleToken]: (state, action) => ({
      ...state,
      token: action.payload,
      error: ''
    }),
    [authorize]: (state, action) => ({
      ...state,
      token: action.payload,
      error: '',
      authorize: true
    }),
    [logout]: state => ({
      ...state,
      isAuthorize: false
    }),
    [validToken]: (state, action) => ({
      ...state,
      token: action.payload,
      error: '',
      isAuthorize: true
    })
  },
  {
    token: '',
    validat: false,
    authorize: '',
    status: false,
    isAuthorize: false
  }
);

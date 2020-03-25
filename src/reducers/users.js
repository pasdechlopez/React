import {handleActions} from 'redux-actions';
import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/users';


export default handleActions (
  {
    [fetchUserFailure]: () => {
      ...state, 
      isFetching: false, 
      error: action.error
    },
    [fetchUserRequest]: (action, state) => {
      ...state, 
      isFetching: true,
      error: null
    },
    [fetchUserSuccess]: (action, state) => {
      ...state,
      isFetching: true,
      data: action.payload,
      error: null,
    },
    {isFetching: false, data: [], error: null}
  }
);
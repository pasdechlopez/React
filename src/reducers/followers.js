import {handleActions} from 'redux-actions';
import {fetchFollowerRequest, fetchFollowerSuccess, fetchFollowerFailure} from '../actions/followers';


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
      ids: action.payload,
      error: null,
    },
    {isFetching: false, ids: [], error: null}
  }
);
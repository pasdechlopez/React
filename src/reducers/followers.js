import {handleActions} from 'redux-actions';
import {fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure} from '../actions/followers';


export default handleActions (
  {
    [fetchFollowersFailure]: () => {
      ...state, 
      isFetching: false, 
      error: action.error
    },
    [fetchFollowersRequest]: (action, state) => {
      ...state, 
      isFetching: true,
      error: null
    },
    [fetchFollowersSuccess]: (action, state) => {
      ...state,
      isFetching: true,
      ids: action.payload,
      error: null,
    },
    {isFetching: false, ids: [], error: null}
  }
);
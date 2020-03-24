import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

export default handleActions(
  {
    [searchSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      result: action.payload
    }),
    [searchRequest]: state => ({
      ...state,
      isFetching: true
    }),
    [searchFailure]: (state, action) => ({
      ...state,
      error: action.error,
      isFetching: false
    })
  },
  { isFetching: false, result: [], error: null }
);

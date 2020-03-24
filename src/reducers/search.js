import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
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
  { isFetching: false, result: [], error: null, random: [getRandomInt(46872)] }
);

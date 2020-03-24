import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from '../actions/show';

export default handleActions(
  {
    [showRequest]: state => ({
      ...state,
      isFetching: true
    }),
    [showSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      show: action.payload
    }),
    [showFailure]: state => ({
      ...state,
      isFetching: false
    })
  },
  { show: {}, isFetching: false }
);

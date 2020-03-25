import { createActions } from 'redux-actions';

export const { searchRequest, searchSuccess, searchFailure } = createActions(
  {
    SEARCH_REQUEST: [payload => payload, (payload, meta) => meta]
  },
  'SEARCH_SUCCESS',
  'SEARCH_FAILURE'
);

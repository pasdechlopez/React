import {createActions} from 'redux-actions';

export default const {searchRequest, searchSuccess, searchFailure} = createActions(
  'SEARCH_REQUEST',
  'SEARCH_SUCCESS',
  'SEARCH_FAILURE'
);
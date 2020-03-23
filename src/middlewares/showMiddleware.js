import { search } from '../api';

import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const searchMiddleware = (store, action, next) => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(result => {
        store.dispatch(searchSuccess(result));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }

  return next(action);
};

export default searchMiddleware;

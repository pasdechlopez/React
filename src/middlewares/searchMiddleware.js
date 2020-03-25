import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { search } from 'api';

export const getRandomInt = limit => {
  return Math.floor(Math.random() * Math.floor(limit)).toString();
};

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(series => {
        const { meta } = action;

        if (meta && meta.luck) {
          return [series[getRandomInt(series.length)]];
        }

        return series;
      })
      .then(series => {
        store.dispatch(searchSuccess(series));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
    console.log('action', action);
    console.log('payload type', action.payload);
  }

  return next(action);
};

import searchReducer from '../reducers/search';
import authReducer from '../reducers/auth';
import followersReducer from '../reducers/followers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authReducer,
  searchReducer,
  followersReducer
});

export default rootReducer;

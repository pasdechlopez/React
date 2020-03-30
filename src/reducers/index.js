import searchReducer from '../reducers/search';
import authReducer from '../reducers/auth';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authReducer,
  searchReducer
});

export default rootReducer;

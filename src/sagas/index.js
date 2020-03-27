import { fork } from 'redux-saga/effects';
import mySaga from './mySaga';
import auth from './auth';
import followers from './followers';

export default function*() {
  yield fork(mySaga);
  yield fork(followers);
  yield fork(auth);
}

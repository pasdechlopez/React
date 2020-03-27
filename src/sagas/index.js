import { fork } from 'redux-saga/effects';
import mySaga from './mySaga';
import followers from './followers';

export default function*() {
  yield fork(mySaga);
  yield fork(followers);
}

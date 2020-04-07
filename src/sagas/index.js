import { fork } from 'redux-saga/effects';
import search from './search';
import auth from './auth';
import followers from './followers';

export default function*() {
  yield fork(auth);

  yield fork(search);
  yield fork(followers);
}

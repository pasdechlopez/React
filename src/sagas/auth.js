import { call, put, take, takeLatest } from 'redux-saga/effects';
import { fetchUser, networkRequest } from '../github';

import {
  authorize,
  authorizeSuccess,
  authorizeFailure,
  logout
} from '../actions/auth';

import {
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
  getTokenFromLocalStorage
} from '../localStorage';

function* authUserSaga({ payload: payloadToken }) {
  try {
    let token = payloadToken || getTokenFromLocalStorage();
    if (!token) {
      console.log('unauthorized');
    }
    console.log('token fro, authsaga', payloadToken);
    const user = yield call(networkRequest, fetchUser, { token });
    setTokenToLocalStorage(token);
    yield put(authorizeSuccess(user, { token }));

    yield take(logout);
    removeTokenFromLocalStorage();
  } catch (error) {
    console.error('error from auth saga', error);
    yield put(authorizeFailure(error));
  }
}

function* auth() {
  yield takeLatest(authorize, authUserSaga);
}

export default auth;

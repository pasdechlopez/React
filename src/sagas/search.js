import { call, put, takeEvery } from 'redux-saga/effects';
import { findUser, networkRequest, fetchUser } from '../github';
import {
  fetchUserSuccess,
  fetchUser as searchForUser,
  fetchUserFailure
} from '../actions/search';
import { getTokenFromLocalStorage } from '../localStorage';
import { authorizeFailure } from '../actions/auth';

function* fetchUserSaga({ payload: id }) {
  try {
    const token = getTokenFromLocalStorage();

    if (id === 'me') {
      const user = yield call(networkRequest, fetchUser, { token });
      yield put(fetchUserSuccess(user));
    }
    if (id !== 'me') {
      const foundUser = yield call(networkRequest, findUser, {
        username: id,
        tokenValue: token
      });

      yield put(fetchUserSuccess(foundUser));
    }
  } catch (error) {
    console.error('action from searchSaga', id);
    yield put(authorizeFailure(error));
    yield put(fetchUserFailure(error));
  }
}

function* search() {
  yield takeEvery(searchForUser, fetchUserSaga);
}

export default search;

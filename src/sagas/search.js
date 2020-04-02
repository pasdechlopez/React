import { call, put, takeEvery } from 'redux-saga/effects';
import { findUser, networkRequest, fetchUser } from '../github';
import {
  searchSuccess,
  fetchUser as searchForUser,
  searchFailure
} from '../actions/search';
import { getTokenFromLocalStorage } from '../localStorage';

function* fetchUserSaga({ payload: id }) {
  try {
    const token = getTokenFromLocalStorage();

    if (id === 'me') {
      const user = yield call(networkRequest, fetchUser, { token });
      yield put(searchSuccess(user));
    } else {
      const foundUser = yield call(networkRequest, findUser, {
        username: id,
        tokenValue: token
      });
      yield put(searchSuccess(foundUser));
    }
  } catch (error) {
    console.error('action from searchSaga', id);
    yield put(searchFailure(error));
  }
}

function* search() {
  yield takeEvery(searchForUser, fetchUserSaga);
}

export default search;

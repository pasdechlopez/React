import { call, put, takeEvery } from 'redux-saga/effects';
import { findUser, networkRequest } from '../github';
import { handleUser, fetchUser, searchFailure } from '../actions/search';

function* fetchUserSaga(action) {
  try {
    const foundUser = yield call(networkRequest, findUser, {
      username: action.payload,
      tokenValue: action.meta.currentToken
    });
    console.log(foundUser);

    yield put(fetchUser(foundUser));
  } catch (error) {
    console.error('action from searchSaga', action);
    yield put(searchFailure(error));
  }
}

function* search() {
  yield takeEvery(findUser, fetchUserSaga);
}

export default search;

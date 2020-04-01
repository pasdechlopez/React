import { call, put, takeEvery } from 'redux-saga/effects';
import { findUser, networkRequest } from '../github';
import { handleUser, submitForm, handleFailure } from '../actions/search';

function* fetchUserSaga(action) {
  try {
    const fetchUser = yield call(networkRequest, findUser, {
      username: action.payload,
      tokenValue: action.meta.currentToken
    });
    console.log(fetchUser);

    yield put(handleUser(fetchUser));
  } catch (error) {
    console.error('action from searchSaga', action);
    yield put(handleFailure(error));
  }
}

function* search() {
  yield takeEvery(submitForm, fetchUserSaga);
}

export default search;

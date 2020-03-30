import { call, put, takeEvery } from 'redux-saga/effects';
import { findUser, networkRequest } from '../github';
import {
  handleSuccess,
  submitForm,
  handleFollowers,
  handleFailure
} from '../actions/search';

function* fetchUserSaga(action) {
  try {
    const fetchUser = yield call(networkRequest, findUser, {
      username: action.payload,
      tokenValue: action.meta.currentToken
    });
    console.log(fetchUser);

    yield put(handleSuccess(fetchUser));
  } catch (error) {
    console.error('error from mysaga', action.meta);
    yield put(handleFailure(error));
  }
}

function* search() {
  yield takeEvery(submitForm, fetchUserSaga);
}

export default search;

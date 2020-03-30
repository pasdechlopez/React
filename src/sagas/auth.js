import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUser, networkRequest } from '../github';
import {
  handleSuccess,
  submitForm,
  handleFollowers,
  handleFailure
} from '../actions/search';
import {
  handleToken,
  authorize,
  validToken,
  handleError
} from '../actions/auth';

function* authUserSaga(action) {
  try {
    const token = yield call(networkRequest, fetchUser, {
      tokenValue: action.payload
    });
    console.log(token, 'authUserSaga from auth saga');

    yield put(handleToken(token));
  } catch (error) {
    console.error('error from auth saga', error);
    yield put(handleError(error));
  }
}

function* auth() {
  yield takeEvery(authorize, authUserSaga);
}

export default auth;

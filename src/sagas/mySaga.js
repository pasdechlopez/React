import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
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
    console.error('error from mysaga', action);
    yield put(handleFailure(error));
  }
}

function* mySaga() {
  // yield takeEvery('FETCH_REQUESTED', fetchUser);
  yield takeEvery(submitForm, fetchUserSaga);
}

export default mySaga;

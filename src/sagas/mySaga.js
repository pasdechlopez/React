import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUser, networkRequest } from '../github';
import {
  handleUsername,
  submitForm,
  handleFollowers,
  searchFailure,
  searchSuccess
} from '../actions/search';

function* fetchUserSaga(action) {
  try {
    const user = yield call(networkRequest, fetchUser, {
      username: action.payload.username
    });

    console.warn({ user });
    yield put(handleUsername(user));
  } catch (error) {
    console.error(error);
    yield put({ type: 'ERROR' });
  }
}

function* mySaga() {
  // yield takeEvery('FETCH_REQUESTED', fetchUser);
  yield takeEvery(submitForm, fetchUserSaga);
}

export default mySaga;

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUser, networkRequest } from '../github';
import {
  handleUsername,
  submitForm,
  handleFollowers,
  handleFailure,
  searchSuccess
} from '../actions/search';

function* fetchUserSaga(action) {
  try {
    const user = yield call(networkRequest, fetchUser, {
      username: action.payload
    });
    console.log(action);

    yield put(handleUsername(user));
  } catch (error) {
    console.error('error from saga0', error);
    yield put(handleFailure(error));
  }
}

function* mySaga() {
  // yield takeEvery('FETCH_REQUESTED', fetchUser);
  yield takeEvery(submitForm, fetchUserSaga);
}

export default mySaga;

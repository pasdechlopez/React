import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { networkRequest, fetchFollowers } from '../github';
import {
  handleFollowers,
  handleSuccess,
  handleFailure
} from '../actions/followers';
import { getTokenFromLocalStorage } from '../localStorage';

function* fetchFollowersSaga(action) {
  try {
    const followers = yield call(networkRequest, fetchFollowers, {
      username: action.payload,
      tokenValue: getTokenFromLocalStorage()
    });
    console.log(action, 'action from followersSAGA');

    yield put(handleSuccess(followers));
  } catch (error) {
    console.log(action.meta, 'action from followersSAGA');

    yield put(handleFailure(error));
  }
}

function* followers() {
  // yield takeEvery('FETCH_REQUESTED', fetchUser);
  yield takeEvery(handleFollowers, fetchFollowersSaga);
}

export default followers;

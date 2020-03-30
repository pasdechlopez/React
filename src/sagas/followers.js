import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { networkRequest, fetchFollowers } from '../github';
import { handleFailure, handleSuccess } from '../actions/search';
import { handleFollowers } from '../actions/followers';

function* fetchFollowersSaga(action) {
  try {
    const followers = yield call(networkRequest, fetchFollowers, {
      username: action.payload,
      tokenValue: action.meta.currentToken
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

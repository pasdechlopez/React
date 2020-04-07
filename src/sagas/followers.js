import { call, put, takeEvery } from 'redux-saga/effects';
import { networkRequest, fetchUsersFollowers } from '../github';
import {
  fetchFollowers,
  handleFollowersSuccess,
  handleFollowersFailure
} from '../actions/followers';
import { getTokenFromLocalStorage } from '../localStorage';

function* fetchFollowersSaga(action) {
  try {
    const followers = yield call(networkRequest, fetchUsersFollowers, {
      username: action.payload,
      tokenValue: getTokenFromLocalStorage()
    });

    yield put(handleFollowersSuccess(followers));
  } catch (error) {
    yield put(handleFollowersFailure(error));
  }
}

function* followers() {
  yield takeEvery(fetchFollowers, fetchFollowersSaga);
}

export default followers;

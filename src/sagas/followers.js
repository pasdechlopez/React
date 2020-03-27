// import { takeLatest, call, put } from 'redux-saga/effects';
// import { getUserFollowers } from 'a';

// function* fetchFollowersSaga(action) {
//   try {
//     const response = yield call(getUserFollowers, action.payload);
//     yield put(fetchFollowersSuccess(response.data));
//   } catch (error) {
//     yield put(fetchFollowersFailure(error));
//   }
// }

// export function* fetchFollowersWatch() {
//   yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
// }

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { networkRequest, fetchFollowers } from '../github';
import {
  handleFollowers,
  handleFailure,
  handleFollowersPage
} from '../actions/search';

function* fetchFollowersSaga(action) {
  try {
    const followers = yield call(networkRequest, fetchFollowers, {
      username: action.payload
    });
    console.log(followers);

    yield put(handleFollowers(followers));
  } catch (error) {
    console.error('error from saga', error);
    yield put(handleFailure(error));
  }
}

function* followers() {
  // yield takeEvery('FETCH_REQUESTED', fetchUser);
  yield takeEvery(handleFollowersPage, fetchFollowersSaga);
}

export default followers;

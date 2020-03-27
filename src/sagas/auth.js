// export default function* authFlow() {
//   while (true) {
//     const isAuthorized = yield select(getIsAuthorized);
//     const localStorageToken = yield call(getTokenFromLocalStorage);

//     let token;

//     if (!isAuthorized && localStorageToken) {
//       token = localStorageToken;
//       yield put(authorize());
//     } else {
//       const action = yield take(authorize);
//       token = action.payload;
//     }

//     yield call(setTokenApi, token);
//     yield call(setTokenToLocalStorage, token);

//     yield take(logout);

//     yield call(removeTokenFromLocalStorage);
//     yield call(clearTokenApi);
//   }
// }
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchUser, networkRequest } from '../github';
import {
  handleSuccess,
  submitForm,
  handleFollowers,
  handleFailure
} from '../actions/search';
import { handleToken, authorize, validToken } from '../actions/auth';

function* authUserSaga(action) {
  try {
    const token = yield call(networkRequest, fetchUser, {
      token: action.payload
    });
    console.log(token, 'authUserSaga from auth saga');

    yield put(handleSuccess(token));
  } catch (error) {
    console.error('error from saga0', error);
    yield put('FAILURE', (error: rrepfefij));
  }
}

function* mySaga() {
  yield takeEvery(authorize, authUserSaga);
}

export default mySaga;

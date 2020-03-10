import { all } from 'redux-saga/effects';
import chart from './chartSaga';
import login from './loginSaga';
import register from './registrationSaga';
import tracker from './trackerSaga';
import user from './userSaga';

export default function* rootSaga() {
  yield all([
    chart(),
    login(),
    register(),
    tracker(),
    user(),
  ]);
}
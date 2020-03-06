import { all } from 'redux-saga/effects';
import login from './loginSaga';
import tracker from './trackerSaga';

export default function* rootSaga() {
  yield all([
    login(),
    tracker(),
  ]);
}
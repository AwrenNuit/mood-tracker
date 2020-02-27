import { all } from 'redux-saga/effects';
import login from './loginSaga';

export default function* rootSaga() {
  yield all([
    login,
  ]);
}
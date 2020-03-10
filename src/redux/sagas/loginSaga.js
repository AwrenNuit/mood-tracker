import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* login(action) {
  try {
    yield put({type: `CLEAR_LOGIN_ERROR`});    
    const config = {
      headers: {'Content-Type': `application/json`},
      withCredentials: true,
    }
    yield axios.post(`/api/user/login`, action.payload, config);
    yield put({type: `FETCH_USER`});
  } catch (error) {
    console.log('Error logging in.', error);
    if (error.response.status === 401) {
      yield put({type: `LOGIN_FAILED`});
    } else {
      yield put({type: `LOGIN_FAILED_NO_CODE`});
    }
  }
}

function* logout(action) {
  try {
    const config = {
      headers: {'Content-Type': `application/json`},
      withCredentials: true,
    }
    yield axios.post(`/api/user/logout`, config);
    yield put({type: `CLEAR_ALL`});
  } catch (error) {
    console.log('Error logging out.', error);
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
}

export default loginSaga;

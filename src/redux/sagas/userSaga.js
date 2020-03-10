import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUser(action) {
  try {
    const config = {
      headers: {'Content-Type': `application/json`},
      withCredentials: true,
    };
    const response = yield axios.get(`/api/user`, config);
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('Error retrieving user.', error);
  }
}

function* getUserDetails(action){
  try {
    const id = action.payload;
    const response = yield axios.get(`/api/user/${id}`);
    yield put({type: `SET_USER_DETAILS`, payload: response.data});
  } catch(error) {
    console.log('Error retrieving user details.', error);
  }
}

function* putDetails(action){
  try{
    yield axios.put(`/api/user/details`, action.payload);
    yield put({type: `GET_USER`});
  } catch(error){
    console.log('Error updating details.', error);
  }
}

function* putCloseAccount(action){
  try{
    yield axios.put(`/api/user/close`, action.payload);
    yield put({type: `LOGOUT`});
  } catch(error){
    console.log('Error closing account.', error);
  }
}

function* putPassword(action){
  try{
    yield axios.put(`/api/user/password`, action.payload);
    yield put({type: `GET_USER`});
  } catch(error){
    alert('Error updating password.');
  }
}

function* userSaga() {
  yield takeLatest(`CLOSE_ACCOUNT`, putCloseAccount);
  yield takeLatest(`FETCH_USER`, fetchUser);
  yield takeLatest(`GET_USER_DETAILS`, getUserDetails);
  yield takeLatest(`PUT_USER_DETAILS`, putDetails);
  yield takeLatest(`PUT_USER_PASSWORD`, putPassword);
}

export default userSaga;
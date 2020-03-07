import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getUserDetails(action){
  try {
    const id = action.payload;
    const response = yield axios.get(`/api/user/${id}`);
    yield put({type: `SET_USER`, payload: response.data});
  } catch(error) {
    console.log('Error fetching user details.', error);
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

function* trackerSaga() {
  yield takeLatest(`CLOSE_ACCOUNT`, putCloseAccount);
  yield takeLatest(`GET_USER_DETAILS`, getUserDetails);
  yield takeLatest(`PUT_USER_DETAILS`, putDetails);
  yield takeLatest(`PUT_USER_PASSWORD`, putPassword);
}
  
export default trackerSaga;
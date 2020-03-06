import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* login(action){
  try{
    const password = action.payload.password;
    const email = action.payload.email;
    const response = yield axios.get(`/api/user/login/${password}/${email}`);
    yield put({type: `SET_USER`, payload: response.data});
  } catch(error){
    console.log('Error logging in.', error);
  }
}

function* logout(action){
  try{
    yield axios.get(`/api/user/logout`);
    yield put({type: `CLEAR_ALL`});
  } catch(error){
    alert('Error logging out.');
  }
}

function* loginSaga() {
  yield takeLatest(`LOGIN`, login);
  yield takeLatest(`LOGOUT`, logout);
}
  
export default loginSaga;
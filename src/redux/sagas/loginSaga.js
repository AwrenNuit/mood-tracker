import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* login(action){
  try{
    const response = yield axios.get('/api/login')
    yield put({type: `SET_USER`, payload: response.data});
  } catch(error){
    alert('Error logging in.');
  }
}

function* loginSaga() {
  yield takeLatest(`LOGIN`, login);
}
  
export default loginSaga;
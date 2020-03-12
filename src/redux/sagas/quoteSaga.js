import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getQuote(action){
  try{
    const response = yield axios.get(`/api/quote`);
    yield put({type: `SET_QUOTE`, payload: response.data});
  } catch(error){
    console.log('Error getting quotation.', error);
  }
}

function* quoteSaga() {
  yield takeLatest(`GET_QUOTE`, getQuote);
}
  
export default quoteSaga;
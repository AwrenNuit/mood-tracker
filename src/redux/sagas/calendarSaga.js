import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCalendar(action){
  try{
    const id = action.payload;
    const response = yield axios.get(`/api/calendar/${id}`);
    yield put({type: `SET_CALENDAR`, payload: response.data});
  } catch(error){
    console.log('Error getting calendar data.', error);
  }
}

function* calendarSaga() {
  yield takeLatest(`GET_CALENDAR`, getCalendar);
}
  
export default calendarSaga;
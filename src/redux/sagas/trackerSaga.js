import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getTracker(action){
  try{
    const id = action.payload;
    const response = yield axios.get(`/api/tracker/${id}`);
    yield put({type: `SET_TRACKER`, payload: response.data});
  } catch(error){
    console.log('Error getting tracker data.', error);
  }
}

function* putTracker(action){
  try{
    yield axios.put(`/api/tracker`, action.payload);
    yield put({type: `GET_TRACKER`});
  } catch(error){
    alert('Error updating tracker data.');
  }
}

function* trackerSaga() {
  yield takeLatest(`GET_TRACKER`, getTracker);
  yield takeLatest(`PUT_TRACKER`, putTracker);
}
  
export default trackerSaga;
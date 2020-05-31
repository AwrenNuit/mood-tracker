import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getChart(action){
  try{
    const id = action.payload;
    const response = yield axios.get(`/api/chart/${id}`);
    yield put({type: `SET_CHART`, payload: response.data});
  } catch(error){
    console.log('Error getting chart data.', error);
  }
}

function* postEntry(action){
  try{
    yield axios.post(`/api/chart`, action.payload);
    yield put({type: `GET_CHART`, payload: action.payload.id});
  } catch(error){
    alert('Error posting new entry.');
  }
}

function* putChart(action){
  try{
    yield axios.put(`/api/chart`, {data: action.payload});
    yield put({type: `GET_CHART`});
  } catch(error){
    alert('Error updating chart data.');
  }
}

function* chartSaga() {
  yield takeLatest(`GET_CHART`, getChart);
  yield takeLatest(`POST_ENTRY`, postEntry);
  yield takeLatest(`PUT_CHART`, putChart);
}
  
export default chartSaga;
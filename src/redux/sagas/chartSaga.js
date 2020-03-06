import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getChart(action){
  try{
    const id = action.payload.id;
    const response = yield axios.get(`/api/chart/${id}`);
    yield put({type: `SET_CHART`, payload: response.data});
  } catch(error){
    console.log('Error getting chart data.', error);
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
  yield takeLatest(`PUT_CHART`, putChart);
}
  
export default chartSaga;
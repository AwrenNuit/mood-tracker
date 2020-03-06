import { combineReducers } from 'redux';
import chart from './chartReducer';
import login from './loginReducer';
import tracker from './trackerReducer';

const rootReducer = combineReducers({
  chart,
  login,
  tracker,
});

export default rootReducer;
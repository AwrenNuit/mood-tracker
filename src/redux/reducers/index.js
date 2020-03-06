import { combineReducers } from 'redux';
import login from './loginReducer';
import tracker from './trackerReducer';

const rootReducer = combineReducers({
  login,
  tracker,
});

export default rootReducer;
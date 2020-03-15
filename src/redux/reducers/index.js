import { combineReducers } from 'redux';
import chart from './chartReducer';
import loginMode from './loginModeReducer';
import quote from './quoteReducer';
import tracker from './trackerReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  chart,
  loginMode,
  quote,
  tracker,
  user,
});

export default rootReducer;
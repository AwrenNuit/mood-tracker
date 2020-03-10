import { combineReducers } from 'redux';
import chart from './chartReducer';
import loginMode from './loginModeReducer';
import tracker from './trackerReducer';
import user from './userReducer';
import userDetails from './userDetailsReducer';

const rootReducer = combineReducers({
  chart,
  loginMode,
  tracker,
  user,
  userDetails,
});

export default rootReducer;
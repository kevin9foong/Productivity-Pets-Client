import { combineReducers } from 'redux';

import AuthReducer from './authreducer';

export default combineReducers({
  auth: AuthReducer
});

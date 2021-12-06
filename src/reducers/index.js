// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import HomeReducer from './homeReducer';
import AuthReducer from './authReducer';

const rootReducer = combineReducers({
  home: HomeReducer,
  auth: AuthReducer,
});

export default rootReducer;

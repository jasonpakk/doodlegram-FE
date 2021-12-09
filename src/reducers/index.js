// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import HomeReducer from './homeReducer';
import AuthReducer from './authReducer';
import DoodleReducer from './doodleReducer';
import UserReducer from './userReducer';

const rootReducer = combineReducers({
  home: HomeReducer,
  auth: AuthReducer,
  doodle: DoodleReducer,
  user: UserReducer,
});

export default rootReducer;

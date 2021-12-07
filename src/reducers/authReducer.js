import { ActionTypes } from '../actions';

const defaultState = {
  authenticated: false,
  userObject: { user: '' },
  error: false,
};
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        authenticated: true,
        userObject: action.payload,
        error: false,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        authenticated: false,
        userObject: { user: '' },
        error: false,
      };
    case ActionTypes.AUTH_ERROR:
      return {
        authenticated: false,
        userObject: { user: '' },
        error: true,
      };
    default:
      return state;
  }
};

export default authReducer;

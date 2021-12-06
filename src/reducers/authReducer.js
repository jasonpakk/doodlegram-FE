import { ActionTypes } from '../actions';

const defaultState = {
  authenticated: false,
  userObject: { user: '' },
};
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        authenticated: true,
        userObject: action.payload,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        authenticated: false,
        userObject: { user: '' },
      };
    case ActionTypes.AUTH_ERROR:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;

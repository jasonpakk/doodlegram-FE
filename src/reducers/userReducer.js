import { UserActionTypes } from '../actions/user';

const defaultState = {
  userDoodles: [],
  user: {},
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_DOODLES:
      return {
        ...state,
        userDoodles: action.payload,
      };
    case UserActionTypes.FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

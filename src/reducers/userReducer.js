import { ActionTypes } from '../actions/user';

const defaultState = {
  userDoodles: [],
  user: {},
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DOODLES:
      return {
        ...state,
        userDoodles: action.payload,
      };
    case ActionTypes.FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

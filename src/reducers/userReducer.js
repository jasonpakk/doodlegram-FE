import { ActionTypes } from '../actions/user';

const defaultState = {
  userDoodles: [],
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DOODLES:
      return {
        ...state,
        userDoodles: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

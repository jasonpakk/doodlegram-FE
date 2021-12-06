import { ActionTypes } from '../actions';

const initialState = {
};
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HELLO_WORLD:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default HomeReducer;

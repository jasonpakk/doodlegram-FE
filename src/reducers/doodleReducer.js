import { ActionTypes } from '../actions';

const defaultState = {
  allDoodles: [],
  currentDoodle: {},
};
const doodleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        ...state,
        allDoodles: action.payload,
      };
    default:
      return state;
  }
};

export default doodleReducer;

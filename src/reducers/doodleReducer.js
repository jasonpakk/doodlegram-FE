import { ActionTypes } from '../actions/doodle';

const defaultState = {
  allDoodles: [],
  currentDoodle: {},
};
const doodleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DOODLES:
      return {
        ...state,
        allDoodles: action.payload,
      };
    default:
      return state;
  }
};

export default doodleReducer;

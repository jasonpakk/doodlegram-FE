import { DoodleActionTypes } from '../actions/doodle';

const defaultState = {
  allDoodles: [],
};
const doodleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DoodleActionTypes.FETCH_DOODLES:
      return {
        ...state,
        allDoodles: action.payload,
      };
    default:
      return state;
  }
};

export default doodleReducer;

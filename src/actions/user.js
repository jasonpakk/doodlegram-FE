import axios from 'axios';

// export const ROOT_URL = 'https://pak-doodlegram.herokuapp.com/api/users';
export const ROOT_URL = 'http://localhost:9090/api/users';

// keys for actiontypes
export const ActionTypes = {
  FETCH_USER_DOODLES: 'FETCH_USER_DOODLES',
};

export function fetchUserDoodles(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/doodles/${id}`).then((response) => {
      dispatch({ type: 'FETCH_USER_DOODLES', payload: response.data });
    }).catch((error) => {
      dispatch({ type: 'ERROR', payload: error });
    });
  };
}

import axios from 'axios';

// export const ROOT_URL = 'https://pak-doodlegram.herokuapp.com/api/users';
export const ROOT_URL = 'http://localhost:9090/api/users';

// keys for actiontypes
export const UserActionTypes = {
  FETCH_USER_DOODLES: 'FETCH_USER_DOODLES',
  FETCH_USER: 'FETCH_USER',
  UPDATE_USER: 'UPDATE_USER',
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

export function fetchUser(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/${id}`).then((response) => {
      dispatch({ type: 'FETCH_USER', payload: response.data });
    }).catch((error) => {
      dispatch({ type: 'ERROR', payload: error });
    });
  };
}

export function updateUser(id, params) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/${id}`, params, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({
        type: 'UPDATE_USER',
        payload: response.data,
      });
    }).catch((e) => {
      console.log(`Error updating user: ${e}`);
    });
  };
}

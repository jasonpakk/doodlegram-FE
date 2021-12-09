import axios from 'axios';

// export const ROOT_URL = 'https://pak-doodlegram.herokuapp.com/api/doodles';
export const ROOT_URL = 'http://localhost:9090/api/doodles';

// keys for actiontypes
export const DoodleActionTypes = {
  CREATE_DOODLE: 'CREATE_DOODLE',
  FETCH_DOODLES: 'FETCH_DOODLES',
};

export function createDoodle(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}`, post,
      { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: 'CREATE_DOODLE', payload: response.data });
        history.push('/');
      }).catch((error) => {
        dispatch({ type: 'ERROR', payload: error });
      });
  };
}

export function fetchDoodles() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}`).then((response) => {
      dispatch({ type: 'FETCH_DOODLES', payload: response.data });
    }).catch((error) => {
      dispatch({ type: 'ERROR', payload: error });
    });
  };
}

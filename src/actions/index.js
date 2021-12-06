import axios from 'axios';

// export const ROOT_URL = 'https://pak-socialmedia.herokuapp.com';
export const ROOT_URL = 'http://localhost:9090';

// keys for actiontypes
export const ActionTypes = {
  HELLO_WORLD: 'HELLO_WORLD',
};

export function helloWorld() {
  return async (dispatch) => {
    axios.get(`${ROOT_URL}/api/`).then((response) => {
      dispatch({
        type: ActionTypes.HELLO_WORLD,
        payload: response.data,
      });
    }).catch((e) => {
      console.log(`Error Connecting to API: ${e}`);
    });
  };
}

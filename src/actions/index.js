import axios from 'axios';

// export const ROOT_URL = 'https://pak-socialmedia.herokuapp.com/api';
export const ROOT_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  HELLO_WORLD: 'HELLO_WORLD',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function helloWorld() {
  return async (dispatch) => {
    axios.get(`${ROOT_URL}`).then((response) => {
      dispatch({
        type: ActionTypes.HELLO_WORLD,
        payload: response.data,
      });
    }).catch((e) => {
      console.log(`Error Connecting to API: ${e}`);
    });
  };
}

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ username, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/users/signin`, { username, password })
      .then((response) => {
        dispatch({
          type: ActionTypes.AUTH_USER,
          payload: response.data,
        });
        localStorage.setItem('token', response.data.token);
        history.push('/');
      }).catch((error) => {
        dispatch(authError(`Sign In Failed: ${error}`));
      });
  };
}

export function signupUser({ username, email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/users/signup`, { username, email, password })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/');
      }).catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`));
      });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

export function clearError() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.NOERROR });
  };
}

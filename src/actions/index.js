import axios from 'axios';

// export const ROOT_URL = 'https://pak-doodlegram.herokuapp.com/api';
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
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        if (history) history.push('/');
      }).catch((error) => {
        dispatch(authError(`Sign In Failed: ${error}`));
      });
  };
}

export function loginFromStorage() {
  return async (dispatch) => {
    const username = await localStorage.getItem('username');
    const password = await localStorage.getItem('password');
    if (username === null || password === null) {
      dispatch({
        type: ActionTypes.DEAUTH_USER,
      });
    } else {
      dispatch(signinUser({ username, password }, null));
    }
  };
}

export function signupUser({ username, email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/users/signup`, { username, email, password })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        if (history) history.push('/');
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
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

export function clearError() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.NOERROR });
  };
}

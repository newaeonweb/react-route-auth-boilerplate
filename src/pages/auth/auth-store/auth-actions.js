import { AUTH_SUCCESS, AUTH_FAIL } from './auth-types';

export const PostLogin = user => dispatch => {
  fetch('http://localhost:3001/api/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  }).then(response => {
    if (response.ok) {
      return response.json().then(json => {
        console.log(json);
        dispatch({
          type: AUTH_SUCCESS,
          payload: json,
        });
      });
    } else {
      return response.json().then(json => {
        console.log(json);
        dispatch({
          type: AUTH_FAIL,
          errorMessage: json.message,
        });
      });
    }
  });
};

import { AUTH_SUCCESS, AUTH_FAIL } from './auth-types';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const PostLogin = user => dispatch => {
  return fetch('http://localhost:3001/api/signin', {
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
        history.push('/character');
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

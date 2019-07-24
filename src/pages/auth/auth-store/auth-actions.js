import { AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './auth-types';
import { httpUserService } from '../../_services/http-user.service';

export const PostLogin = user => dispatch => {
  httpUserService.postSignin('signin', user).then(
    res => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: res,
      });
    },
    error => {
      dispatch({
        type: AUTH_FAIL,
        errorMessage: error,
      });
    }
  );
};

export const Logout = () => dispatch => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};

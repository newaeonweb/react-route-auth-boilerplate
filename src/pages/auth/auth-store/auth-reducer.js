import { AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './auth-types';

const initialState = {
  user: { email: '', name: '' },
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
        errorMessage: null,
      };
    case AUTH_FAIL:
      return {
        ...state,
        errorMessage: action.error,
      };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;

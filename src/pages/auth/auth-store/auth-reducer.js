import { AUTH_SUCCESS, AUTH_FAIL } from './auth-types';

const initialState = {
  email: '',
  password: '',
  user: {},
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      console.log(action);
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    case AUTH_FAIL:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default authReducer;

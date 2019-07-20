import { AUTH_SUCCESS, AUTH_FAIL } from './auth-types';

const initialState = {
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
        errorMessage: null,
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

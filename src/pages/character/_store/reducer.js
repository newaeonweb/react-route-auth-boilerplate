import { CHARACTER_GET, CHARACTER_SUCCESS, CHARACTER_FAIL } from './types';

const initialState = {
  info: {},
  characterList: [],
  characterItem: {},
  isLoading: false,
  errorMessage: null,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_GET:
      return {
        isLoading: true,
      };
    case CHARACTER_SUCCESS:
      console.log('reducer', action.payload);
      return {
        ...state,
        info: action.payload.info,
        characterList: action.payload.results,
        isLoading: false,
      };
    case CHARACTER_FAIL:
      return {
        errorMessage: 'Fail to get data',
      };
    default:
      return state;
  }
};

export default characterReducer;

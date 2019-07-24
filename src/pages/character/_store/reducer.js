import {
  CHARACTER_ALL_REQUEST,
  CHARACTER_ALL_SUCCESS,
  CHARACTER_ALL_FAIL,
} from './types';

const initialState = {
  info: {},
  characterList: [],
  characterItem: {},
  isLoading: false,
  errorMessage: null,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_ALL_REQUEST:
      return {
        isLoading: true,
      };
    case CHARACTER_ALL_SUCCESS:
      return {
        ...state,
        info: action.payload.info,
        characterList: action.payload.results,
        isLoading: false,
      };
    case CHARACTER_ALL_FAIL:
      return {
        errorMessage: 'Fail to get data',
      };
    default:
      return state;
  }
};

export default characterReducer;

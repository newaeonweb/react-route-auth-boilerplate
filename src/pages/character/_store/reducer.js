import {
  CHARACTER_ALL_REQUEST,
  CHARACTER_ALL_SUCCESS,
  CHARACTER_ALL_FAIL,
  CHARACTER_ONE_REQUEST,
  CHARACTER_ONE_SUCCESS,
  CHARACTER_ONE_FAIL,
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
        errorMessage: 'Fail to get all characters',
      };
    case CHARACTER_ONE_REQUEST:
      return {
        isLoading: true,
      };
    case CHARACTER_ONE_SUCCESS:
      return {
        ...state,
        character: action.payload,
        isLoading: false,
      };
    case CHARACTER_ONE_FAIL:
      return {
        errorMessage: 'Fail to get one character',
      };
    default:
      return state;
  }
};

export default characterReducer;

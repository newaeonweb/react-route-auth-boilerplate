import {
  CHARACTER_ALL_REQUEST,
  CHARACTER_ALL_SUCCESS,
  CHARACTER_ALL_FAIL,
  CHARACTER_ONE_REQUEST,
  CHARACTER_ONE_SUCCESS,
  CHARACTER_ONE_FAIL,
} from './types';
import { httpCartoonService } from '../../_services/http-cartoon.service';

export const getCharacters = () => dispatch => {
  dispatch({
    type: CHARACTER_ALL_REQUEST,
    isLoading: true,
  });
  httpCartoonService.getList('character').then(
    res => {
      dispatch({
        type: CHARACTER_ALL_SUCCESS,
        payload: res,
      });
    },
    error => {
      dispatch({
        type: CHARACTER_ALL_FAIL,
        errorMessage: error,
      });
    }
  );
};

export const getOneCharacter = id => dispatch => {
  dispatch({
    type: CHARACTER_ONE_REQUEST,
    isLoading: true,
  });
  httpCartoonService.getOne(`character/${id}`).then(
    res => {
      dispatch({
        type: CHARACTER_ONE_SUCCESS,
        payload: res,
      });
    },
    error => {
      dispatch({
        type: CHARACTER_ONE_FAIL,
        errorMessage: error,
      });
    }
  );
};

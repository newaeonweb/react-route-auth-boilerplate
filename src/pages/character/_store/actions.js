import { CHARACTER_GET, CHARACTER_SUCCESS, CHARACTER_FAIL } from './types';
import { httpCartoonService } from '../../_services/http-cartoon.service';

export const getCharacters = () => dispatch => {
  dispatch({
    type: CHARACTER_GET,
    isLoading: true,
  });
  httpCartoonService.getList('character').then(
    res => {
      dispatch({
        type: CHARACTER_SUCCESS,
        payload: res,
      });
    },
    error => {
      dispatch({
        type: CHARACTER_FAIL,
        errorMessage: error,
      });
    }
  );
};

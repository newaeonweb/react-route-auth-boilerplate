import { CHARACTER_GET, CHARACTER_SUCCESS, CHARACTER_FAIL } from './types';

export const getCharacters = () => dispatch => {
  dispatch({
    type: CHARACTER_GET,
    isLoading: true,
  });
  fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: CHARACTER_SUCCESS,
        payload: res,
      })
    );
};

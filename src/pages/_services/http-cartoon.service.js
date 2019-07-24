const API_URL = 'https://rickandmortyapi.com/api';

const getList = endpoint => {
  return fetch(`${API_URL}/${endpoint}`).then(handleResponse);
};

const getOne = endpoint => {
  return fetch(`${API_URL}/${endpoint}`).then(handleResponse);
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const httpCartoonService = {
  getList,
  getOne,
};

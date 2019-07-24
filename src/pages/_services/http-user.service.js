const API_URL = 'http://localhost:3001/api';

const postSignin = (endpoint, user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  };
  return fetch(`${API_URL}/${endpoint}`, requestOptions).then(handleResponse);
};

const postSignup = (endpoint, user) => {
  console.log(user);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    }),
  };
  return fetch(`${API_URL}/${endpoint}`, requestOptions).then(handleResponse);
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

export const httpUserService = {
  postSignin,
  postSignup,
};

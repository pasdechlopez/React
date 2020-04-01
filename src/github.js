import { call } from 'redux-saga/effects';

export const findUser = ({ username, tokenValue }) =>
  fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
      authorization: `token ${tokenValue}`
    }
  });
export const fetchUser = ({ tokenValue }) =>
  fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      authorization: `token ${tokenValue}`
      // authorization: `token  `
    }
  });

export const fetchFollowers = ({ username, tokenValue }) =>
  fetch(
    `https://api.github.com/users/${username}/followers?pages=1&per_page=100`,
    {
      method: 'GET',
      headers: {
        authorization: `token ${tokenValue}`
      }
    }
  );

export function* networkRequest(apiFn, apiArgs) {
  try {
    const response = yield call(apiFn, apiArgs);

    if (response.ok) {
      const data = yield response.json();
      return data;
    } else {
      throw response;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

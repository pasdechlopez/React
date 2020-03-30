import { call } from 'redux-saga/effects';
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.github.com/'
// });

// export const setTokenApi = access_token =>
//   (instance.defaults.params = { access_token });

// export const clearTokenApi = () =>
//   (instance.defaults.params = { access_token: undefined });

// export const fetchData = async username => {
//   let response = await fetch(`https://api.github.com/users/${username}`, {
//     headers: {
//       authorization: 'token d7c91bb87573b57f49c38ebfe86adc7ac46cd2c1'
//     }
//   });
//   console.warn(response);
//   let data = await response.json();
//   return data;
// };

// export const getUserFollowers = (e, login) => {
//   e.persist();
//   return async () => {
//     const response = await fetch(
//       `users/${login}/followers?pages=1&per_page=100`
//     );
//     const data = await response.json();
//   };
// };

//----------
export const findUser = ({ username }) =>
  fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
      authorization: 'token  0754e4e5c80570afd77dc680819cdc8135b094c7 '
    }
  });
export const fetchUser = ({ tokenValue }) =>
  fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      authorization: `token ${tokenValue}`
      // authorization: `token 0754e4e5c80570afd77dc680819cdc8135b094c7 `
    }
  });

export const fetchFollowers = ({ username }) =>
  fetch(
    `https://api.github.com/users/${username}/followers?pages=1&per_page=100`,
    {
      method: 'GET',
      headers: {
        authorization: 'token  0754e4e5c80570afd77dc680819cdc8135b094c7 '
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

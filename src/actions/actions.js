export const handleUsername = e => {
  return {
    type: 'HANDLE_USERNAME',
    e: e
  };
};

export const submitForm = (e, username) => {
  e.persist();
  return async dispatch => {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const data = await resp.json();
      const respFollowers = await fetch(data.followers_url);
      const followersList = await respFollowers.json();

      dispatch({
        type: 'SUBMIT_FORM',
        e: e,
        data,
        followersList,
        message: 'fine'
      });
      console.log('all data from api ', data);
    } catch (er) {
      dispatch({
        type: 'ERROR',
        message: er
      });
    }
  };
};

export const getUserFollowers = (e, login) => {
  e.persist();
  return async dispatch => {
    const response = await fetch(
      `users/${login}/followers?pages=1&per_page=100`
    );
    const data = await response.json();
    dispatch({
      type: 'HANDLE_FOLLOWERS',
      e: e,
      data
    });
  };
};

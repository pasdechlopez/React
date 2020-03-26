export const submitForm = (e, username) => {
  e.persist();
  return async () => {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const data = await resp.json();
      const respFollowers = await fetch(data.followers_url);
      const followersList = await respFollowers.json();
    } catch (er) {
      console.log(er);
    }
  };
};

export const getUserFollowers = (e, login) => {
  e.persist();
  return async () => {
    const response = await fetch(
      `users/${login}/followers?pages=1&per_page=100`
    );
    const data = await response.json();
  };
};

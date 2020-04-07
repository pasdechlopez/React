export const getIsAuthorized = state => state.authReducer.isAuthorized;
export const getError = state => state.authReducer.error;

export const getFollowers = state => state.followersReducer.followers;
export const getFoundUser = state => state.searchReducer.foundUser;
export const getIsFetching = state => state.searchReducer.isFetching;
export const getIsFetched = state => state.searchReducer.isFetched;

const reducer = (state = initState, action) => {
  if (action.type === 'HANDLE_USERNAME') {
    return {
      ...state,
      username: action.e.target.value
    };
  } else if (action.type === 'SUBMIT_FORM') {
    let gitResponse = action.data;
    let followersList = action.followersList;
    if (gitResponse.public_repos) {
      return {
        ...state
      };
    } else if (action.type === 'ERROR') {
      return {
        ...state,
        message: action.message
      };
      console.log('ERRROR');
    } else {
      return {
        ...state,
        message: 'User Not Found.'
      };
    }
  }
  // else if (action.type === 'HANDLE_FOLLOWERS') {
  //   let followersList = action.followersList;
  //   let gitResponse = action.data;
  //   console.log(action);
  //   return {
  //     ...state
  //     // following: gitResponse.following,
  //     // followers: gitResponse.followers,
  //     // followersList: followersList
  //   };
  // }
  return state;
};

export default reducer;

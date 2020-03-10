const userDetails = (state=[], action) => {
  switch (action.type) {
    case `SET_USER_DETAILS`:
      return action.payload;
    case `CLEAR_ALL`:
      return ``;
    default:
      return state;
  }
};

export default userDetails;
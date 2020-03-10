const user = (state=[], action) => {
  switch (action.type) {
    case `SET_USER`:
      return action.payload;
    case `CLEAR_ALL`:
      return ``;
    default:
      return state;
  }
};

export default user;
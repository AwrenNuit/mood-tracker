const quote = (state=[], action) => action.type === `SET_QUOTE` ? action.payload : state;

export default quote;
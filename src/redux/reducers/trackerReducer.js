const tracker = (state=[], action) => action.type === `SET_TRACKER` ? action.payload : state;

export default tracker;
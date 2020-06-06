const calendar = (state=[], action) => action.type === `SET_CALENDAR` ? action.payload : state;

export default calendar;
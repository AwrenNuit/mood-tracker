const chart = (state=[], action) => action.type === `SET_CHART` ? action.payload : state;

export default chart;
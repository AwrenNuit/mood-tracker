const chartReducer = (state=[], action) => action.type === `SET_CHART` ? action.payload : state;
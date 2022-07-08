import { combineReducers } from 'redux';

const routesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ROUTES':
            return action.payload;
        default:
            return state;
    }
};

const topRoutesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOP_ROUTES':
            return action.payload;
        default:
            return state;
    }
};

const routeDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ROUTE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    routesReducer,
    topRoutesReducer,
    routeDetailReducer,
  });
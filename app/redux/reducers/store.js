import * as actionTypes from '../action-types.js';

const initialState = []

export default function store (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_ADD:
            return [action.data, ...state];
        case actionTypes.STORE_RM:
            return state.filter((item) => {
                if (item.id !== action.data.id) {
                    return item;
                }
            });
        default:
            return state;
    }
}

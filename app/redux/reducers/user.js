import * as Types from '../action-types.js';

let initState = {
    orderList: []
}
export default (state = initState, action) => {
    if (action.type === Types.GET_USER_ORDER_LISTS) {
        return {orderList: action.data};
    }
    return state;
}

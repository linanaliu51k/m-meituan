import * as Types from '../action-types.js';
import {getOrderListDatas, postComments} from '../../api/user/orderlist.js';

export const getUserOrderlist = (city) => (dispatch, getState) => {
    let username = getState().common.username;
    getOrderListDatas(username).then(list => {
        dispatch({
            type: Types.GET_USER_ORDER_LISTS,
            data: list,
        });
    });
}

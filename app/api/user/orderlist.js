import { get, post } from '../index.js';
import Config from "../../config/index.js";

export function getOrderListDatas(username) {
    const result = get(Config.host + '/api/orderlist/' + username)
    return result
}

export function postComments(id, comment, star) {
    const result = post(Config.host + '/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}

import { get } from '../get';
import { post } from '../post';
import Config from "../../config/index.js";

export function getOrderListData(username) {
    const result = get(Config.host + '/api/orderlist/' + username)
    return result
}

export function postComment(id, comment, star) {
    const result = post(Config.host + '/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}

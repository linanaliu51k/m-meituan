import { get } from '../index.js';
import Config from "../../config/index.js";

export function getInfoDatas(id) {
   const result = get(Config.host + '/api/detail/info/' + id)
   return result
}

export function getCommentDatas(page, id) {
    const result = get(Config.host + '/api/detail/comment/' + page + '/' + id)
    return result
}

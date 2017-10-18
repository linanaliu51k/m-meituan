import { get } from '../get';
import Config from "../../config/index.js";

export function getInfoData(id) {
   const result = get(Config.host + '/api/detail/info/' + id)
   return result
}

export function getCommentData(page, id) {
    const result = get(Config.host + '/api/detail/comment/' + page + '/' + id)
    return result
}

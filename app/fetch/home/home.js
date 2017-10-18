import { get } from '../get';
import Config from "../../config/index.js";

export function getAdData() {
    const result = get(`${Config.host}/api/homead`)
    return result
}

export function getListData(city, page) {
    const result = get(Config.host + '/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}

import { get } from '../index.js';
import Config from "../../config/index.js";

export function getAdDatas() {
    return get(`${Config.host}/api/homead`);
}

export function getListDatas(city, page) {
    return get(Config.host + '/api/homelist/' + encodeURIComponent(city) + '/' + page);
}

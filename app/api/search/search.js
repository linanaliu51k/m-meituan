import { get } from '../index.js';
import Config from "../../config/index.js";

export function getSearchDatas(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get(Config.host + '/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    return result
}

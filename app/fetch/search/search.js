import { get } from '../get';
import Config from "../../config/index.js";

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get(Config.host + '/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    return result
}

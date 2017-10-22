import * as Types from '../action-types.js';
import {getSearchDatas} from '../../api/search/search.js';

export const getSearchList = () => (dispatch, getState) => {
    let {hasMore, page} = getState().search;
    let currentCity = getState().common.currentCity;
    let pathname = getState().routing.location.pathname.slice(1);
    let [, category, keyword] = pathname.split('/');
    if (!hasMore) {
        return;
    }
    dispatch({type: Types.SET_SEARCH_LOADING_STATUS});
    //将isLoading状态改成true
    getSearchDatas(page, currentCity, category, keyword).then(list => {
        dispatch({
            type: Types.GET_SEARCH_LIST,
            hasMore: list.hasMore,
            data: list.data
        });
    });
}
export const initSearchList = () => {
    return {
        type: Types.INIT_SEARCH_LIST,
    }
}

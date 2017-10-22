import * as Types from '../action-types.js';
import {getAdDatas, getListDatas} from '../../api/home/home.js';

export const getAd = () => (dispatch) => {
    getAdDatas().then(ads => {
        dispatch({
            type: Types.GET_HOME_AD,
            ads
        });
    });
}
export const getList = () => (dispatch, getState) => {
    let {list: {hasMore, page}} = getState().home;
    let currentCity = getState().common.currentCity;
    if (!hasMore) {
        return;
    }
    dispatch({type: Types.SET_LOADING_STATUS});
    //将isLoading状态改成true
    getListDatas(currentCity, page).then(list => {
        dispatch({
            type: Types.GET_HOME_LIST,
            hasMore: list.hasMore,
            data: list.data,
        });
    });
}

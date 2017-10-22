import * as Types from '../action-types.js';
import {getInfoDatas, getCommentDatas} from '../../api/detail/detail.js';

export const getInfoList = () => (dispatch, getState) => {

    let pathname = getState().routing.location.pathname.slice(1);
    let [, id] = pathname.split('/');
    getInfoDatas(id).then(list => {
        dispatch({
            type: Types.GET_DETAIL_INFO,
            info: list
        });
    });
}
export const getCommentList = () => (dispatch, getState) => {
    let {comment: {hasMore, page}} = getState().detail;
    let pathname = getState().routing.location.pathname.slice(1);
    let [, id] = pathname.split('/');
    if (!hasMore) {
        return;
    }
    dispatch({type: Types.SET_COMMENT_LOADING_STATUS});
    //将isLoading状态改成true
    getCommentDatas(page, id).then(list => {
        dispatch({
            type: Types.GET_DETAIL_COMMENT,
            hasMore: list.hasMore,
            data: list.data,
        });
    });
}

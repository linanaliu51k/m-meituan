import * as Types from '../action-types.js';
let initState = {
    info: {},
    comment: {
        data: [],
        hasMore: true,
        isLoadingMore: false,
        page: 0
    }
}
export default (state = initState, action) => {
    switch(action.type) {
        case Types.GET_DETAIL_INFO:
            return {
                ...state,
                info: action.info
            };
        case Types.GET_DETAIL_COMMENT:
            return {
                ...state,
                comment: {
                    data: [...state.comment.data, ...action.data],
                    hasMore: action.hasMore,
                    isLoadingMore: false,
                    page: state.comment.page + 1
                }
            }
        case Types.SET_COMMENT_LOADING_STATUS:
            return {
                ...state,
                comment: {
                    ...state.comment,
                    isLoadingMore: true
                }
            };
    }
    return state;
}

import * as Types from '../action-types.js';
let initState = {
    data: [],
    hasMore: true,
    isLoadingMore: false,
    page: 0
}
export default (state = initState, action) => {
    switch(action.type) {
        case Types.GET_SEARCH_LIST:
            return {
                hasMore: action.hasMore,
                data: [...state.data, ...action.data],
                isLoadingMore: false,
                page: state.page + 1
            };
        case Types.SET_SEARCH_LOADING_STATUS:
            return {
                ...state,
                isLoadingMore: true
            };
        case Types.INIT_SEARCH_LIST:
            return {
                data: [],
                hasMore: true,
                isLoadingMore: false,
                page: 0
            }
    }
    return state;
}

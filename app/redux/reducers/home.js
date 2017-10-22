import * as Types from '../action-types.js';
let initState = {
    ads: [],
    list: {
        data: [],
        hasMore: true,
        isLoadingMore: false,
        page: 0
    }
}
export default (state = initState, action) => {
    switch(action.type) {
        case Types.GET_HOME_AD:
            return {...state, ads: action.ads};
        case Types.GET_HOME_LIST:
            return {...state, list: {
                hasMore: action.hasMore,
                data: [...state.list.data, ...action.data],
                isLoadingMore: false,
                page: state.list.page + 1
            }};
        case Types.SET_LOADING_STATUS:
            return {...state, list: {
                ...state.list,
                isLoadingMore: true
            }};
    }
    return state;
}

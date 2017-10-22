import * as Types from '../action-types.js';

let initState = {
    currentCity: '',
    username: ''
}
export default (state = initState, action) => {
    if (action.type === Types.SET_CURRENT_CITY) {
        return {...state, currentCity: action.city};
    } else if (action.type === Types.SET_USERNAME) {
        return {
            ...state,
            username: action.username
        }
    }
    return state;
}

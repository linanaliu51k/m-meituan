import * as Types from '../action-types.js';

export const setCurrentCity = (city) => {
    return {
        type: Types.SET_CURRENT_CITY,
        city
    }
}
export const setUsername = (username) => {
    return {
        type: Types.SET_USERNAME,
        username
    }
}

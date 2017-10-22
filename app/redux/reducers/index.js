import { combineReducers } from 'redux';
import home from './home';
import common from './common';
import search from './search';
import detail from './detail';
import user from './user';
import store from './store';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    home,
    common,
    search,
    detail,
    store,
    user,
    routing: routerReducer
});

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index.js';
import reduxThunk from 'redux-thunk';

//路由信息的中间件
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxThunk, routerMiddleware(history))));
    window._store = store;
    return store;
}

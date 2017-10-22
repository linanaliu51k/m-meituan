import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/index.js';

import './static/css/common.less'
import './static/css/font.css'

const initialState = {};
const store = configureStore(initialState);
import App from './containers/index.jsx';


import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
)

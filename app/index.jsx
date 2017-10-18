import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'

const initialState = {};
const store = configureStore(initialState);
import App from './containers/index.jsx';

render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)

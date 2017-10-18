import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
    window._store = store;
    return store;
}

import {createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createSagaMiddleware from 'redux-saga'
import {persistState } from 'redux-devtools';

import devTools from '../containers/devTools';
import rootReducer from '../reducers';
import rootSaga from '../sagas'

const logger = createLogger();
const sagaMiddleware=createSagaMiddleware();

var enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk,promiseMiddleware,sagaMiddleware,logger),
    // Required! Enable Redux DevTools with the monitors you chose
    devTools.instrument()
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer); 

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }

    return store;
}

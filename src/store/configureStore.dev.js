import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import devTools from '../containers/devTools';
import rootReducer from '../reducers';


//----rewrite store dispatch
/*const store=createStore(reducer);*/

/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/

/*const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
));
*/
/*const store=createStore(reducer,compose(applyMiddleware(),devTools.instrument()));
export default store;*/

var enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(),
    // Required! Enable Redux DevTools with the monitors you chose
    devTools.instrument()
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }

    return store;
}

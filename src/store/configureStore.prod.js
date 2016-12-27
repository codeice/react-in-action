import { createStore,applyMiddleware,compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';

var enhancer=compose(applyMiddleware(thunk,promiseMiddleware,logger));

export default function configureStore(initialState){
	const store=createStore(rootReducer,initialState,enhancer);
	return store;
}
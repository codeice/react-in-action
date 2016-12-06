import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers';


var enhancer=compose(applyMiddleware());
export default function configureStore(initialState){
	const store=createStore(rootReducer,initialState,enhancer);
	return store;
}
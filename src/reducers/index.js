import { combineReducers } from 'redux';
import todo from './todo';
import demo from './demo';

const rootReducer=combineReducers({
	todo,
	demo
});


export default rootReducer;
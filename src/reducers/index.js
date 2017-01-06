import { combineReducers } from 'redux';
import todo from './todo';
import demo from './demo';
import counter from './counter';

const rootReducer=combineReducers({
	todo,
	demo,
	counter
});


export default rootReducer;
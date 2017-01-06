import { SUCCESS, ERROR, FETCHING } from '../constants/demoTypes'

const initialState = [{
    id: 0,
    name: 'test user'
}]

export default function demo(state = initialState, action) {
    switch (action.type) {
        case SUCCESS:
            return [
            	action.user,
                ...state
            ]
        case ERROR:
        	console.log('fetch user error!');
        	return state;
        case FETCHING:
        	console.log('fetch user start');
        	return state;
        default:
            return state;
    }
}

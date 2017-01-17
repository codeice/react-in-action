import * as types from '../constants/demoTypes'

const initialState = {
    users: [{
        id: 1,
        name: 'default user'
    }]
}

export default function demo(state = initialState, action) {

    switch (action.type) {
        //redux-promise
        case types.ADD_USER:
            if (action.payload.ok == true) {
                return [...state, action.payload.data.user];
            } else {
                return state;
            }
        case types.RECEIVE_USERS:
        debugger;
            return [
                ...state,
                action.users
            ]
        case types.FAILURE_USERS:
            return state
        default:
            return state;
    }
}

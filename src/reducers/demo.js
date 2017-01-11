import * as types from '../constants/demoTypes'

const initialState = {
    users: [{
        id: 1,
        name: 'default user'
    }]
}

export default function demo(state = initialState, action) {

    switch (action.type) {
        //redux 
        case types.GET_USER:
            return [
                ...state,
                action.user
            ]
        //reducer
        case types.ADD_USER:
            if(action.payload.ok==true){
            return [...state, JSON.parse(action.payload.data.data)];
            }else{
                return state;
            }
        default:
            return state;
    }
}

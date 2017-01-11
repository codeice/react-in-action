import * as types from '../constants/demoTypes'
import api from '../api'


//redux-thunk
export function getUserAsync(id) {
    return dispatch=>{
         api.get('mockjs/9768/Users', { id: id }).then(function(response) {
            console.log('user info=', response.data);
            var user=response.data;
            dispatch({
                type:types.GET_USER,
                user
            });
        }, function(response) {
            console.log('get user info error=', response.data);
        });
    }
}


//redux-promise
export function addUserAsync(user) {
    return {
        type:types.ADD_USER,
        payload:api.post('mockjs/9768/Users', user)
    }
}


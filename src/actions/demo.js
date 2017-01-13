import * as types from '../constants/demoTypes'
import api from '../api'


/*export function getUser(){
    return {
        types.REQUEST_USER
    }
}
*/
export const requestUsers = () => ({
    type: types.REQUEST_USERS
});

export const receivedUsers = (users) => ({
    type: types.RECEIVE_USERS,
    users
});


export const failureUsers = (error, errorType) => ({
    type: types.FAILURE_USERS,
    error,
    errorType
});


//redux-thunk
export function getUserAsync(id) {
    return dispatch => {
        api.get('mockjs/9768/Users', { id: id }).then(function(response) {
            console.log('user info=', response.data);
            var user = response.data;
            dispatch({
                type: types.GET_USER,
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
        type: types.ADD_USER,
        payload: api.post('mockjs/9768/Users', user)
    }
}

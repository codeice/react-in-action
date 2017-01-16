import * as types from '../constants/demoTypes'
import api from '../api'


/*export function getUser(){
    return {
        types.REQUEST_USER
    }
}
*/
export const requestUser = (id) => ({
    type: types.REQUEST_USER,
    id
});

export const receivedUser=(user) => ({
    type: types.RECEIVE_USER,
    user
});


export const failureUser= (error, errorType) => ({
    type: types.FAILURE_USER,
    error,
    errorType
});


/*//redux-thunk
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
*/


//redux-thunk
export function getUserAsync() {
    return dispatch => {
        api.post('users').then(function(response) {
            debugger;
            console.log('user info=', response.users);
            var users = response.users;
            dispatch({
                type: types.RECEIVE_USERS,
                users
            });
        }, function(response) {
            debugger;
            console.log('get user info error=', response);
        });
    }
}


//redux-promise
/*export function addUserAsync(user) {
    return {
        type: types.ADD_USER,
        payload: api.post('mockjs/9768/Users', user)
    }
}*/

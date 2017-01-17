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

export const receivedUsers=(users) => ({
    type: types.RECEIVE_USERS,
    users
});


export const failureUsers= (error, errorType) => ({
    type: types.FAILURE_USERS,
    error,
    errorType
});

//redux-thunk
export function getUserAsync() {
    return dispatch => {
        api.get('users').then(function(response) {
            debugger;
            console.log('user info=', response.data.users);
            var users = response.data.users;
            dispatch({
                type: types.RECEIVE_USERS,
                users
            });
        }, function(response) {
            console.log('get user info error=', response);
        });
    }
}


//redux-promise
export function addUserAsync(user) {
    return {
        type: types.ADD_USER,
        payload: api.post('users/add')
    }
}

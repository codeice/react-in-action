import * as types from '../constants/demoTypes'
import api from '../api'

function fetch() {
    return { type: types.FETCHING }
}

function getUserSuccess(user) {
    return { type: types.SUCCESS, user }
}

function getUserError(user) {
    return { type: types.Error, user }
}

export function getUser(dispatch) {
    dispatch(fetch())
     api.get('mockjs/9768/Users', { id: 2 }).then(function(response) {
        console.log('get data=', response.data);
        dispatch(getUserSuccess(response.data));
    }, function(response) {
        console.log('taobao get error=', response.data);
        dispatch(getUserError(response.data));
    });
}

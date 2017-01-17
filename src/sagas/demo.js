import { takeEvery } from 'redux-saga'
import {put,call} from 'redux-saga/effects'
import  api from '../api'

import * as actions from '../actions/demo'
import * as ActionTypes from '../constants/demoTypes'

function getUsers(){
	return api.get('users');
}

//----获取用户
export function* fetchUsers(params){
	try{
		const response=yield call(getUsers);
		debugger;
		if(response.data.code==200)
		{
			yield put(actions.receivedUsers(response.data.users));
		}else{
			console.log('error');
		}
	}catch(error){
		debugger;
		yield put(actions.failureUsers(error));
	}
}

//----每次request_user action被启动时，启动fetchUser任务
export function* watchFetchUsers(){
	yield * takeEvery(ActionTypes.REQUEST_USERS, fetchUsers)
}

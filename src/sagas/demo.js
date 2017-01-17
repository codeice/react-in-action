import {takeEvery} from 'redux-saga'
import {put,call} from 'redux-saga/effects'
import  api from '../api'

import * as actions from '../actions/demo'
import * as ActionTypes from '../constants/demoTypes'

//----获取用户
export function* fetchUsers(params){
	try{
		debugger;
		const response=yield call(api.get(`mockjs/9768/Users/id${id}`),params.id);
		yield put(actions.receiveUsers);
	}catch(error){
		yield put(actions.failureUsers);
	}
}

//----每次request_user action被启动时，启动fetchUser任务
export function* watchFetchUsers(){
	yield * takeEvery(ActionTypes.REQUEST_USERS, fetchUsers)
}

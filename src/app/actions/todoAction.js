import * as types from '../constants/ActionTypes.js'


/*
 *action 创建函数
 */
export function addTodo(text) {
    return { type: types.ADD_TODO, text }
}

export function deleteTodo(id){
	return { type: types.DELETE_TODO, id }
}

export function completeTodo(id){
	return { type: types.COMPLETE_TODO, id }
}

export function completeAll () {
	return {type: types.COMPLETE_ALL }
}

export function clearCompleted (){
	return { type: types.CLEAR_COMPLETED }
}

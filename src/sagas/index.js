import { fork } from 'redux-saga/effects'
import { watchFetchUsers } from './demo'


export default function* root() {
	yield [
		fork(watchFetchUsers)
	]
}
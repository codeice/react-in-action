import * as counterTypes from '../constants/counterTypes'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = 0, action) {
    switch (action.type) {
        case counterTypes.INCREMENT_COUNTER:
            return state + 1
        case counterTypes.DECREMENT_COUNTER:
            return state - 1
        default:
            return state
    }
}

import { createStore} from 'redux'
import rootReducer from '../reducers/rootReducer';


//----rewrite store dispatch
const store=createStore(rootReducer);
let next = store.dispatch
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default store
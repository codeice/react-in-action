import React from 'react'
import {Route, IndexRoute} from 'react-router'

//import all container component
import App from './containers/app'
import Login from './containers/login'
import Dashboard from './containers/dashboard'
import Todo from './containers/todo'
import Demo from './containers/demo'
import Counter from './containers/counter'


export default (
 <Route path="/">
  <Route component={App}>
 	  <IndexRoute component={Dashboard}/>
	  <Route path="/Todo" component={Todo}/>
	  <Route path="/Demo" component={Demo}/>
	  <Route path="/Counter" component={Counter}/>
  </Route>
  	  <Route path="/Login" component={Login}/>
 </Route>
)

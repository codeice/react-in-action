import React from 'react'
import {Route, IndexRoute} from 'react-router'

//import all container component
import App from './containers/app'
import Dashboard from './containers/dashboard'
import Todo from './containers/todo'
import About from './containers/about'
import Inbox from './containers/inbox'


export default (
 <Route path="/" component={App}>
  <IndexRoute component={Dashboard}/>
  <Route path="/Todo" component={Todo}/>
  <Route path="/About" component={About}/>
  <Route path="/Inbox" component={Inbox}/>
 </Route>
)

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'
import Root from './root'

const store = configureStore();

ReactDOM.render(
 <Root store={store} history={hashHistory} />,
	document.getElementById('app')
)

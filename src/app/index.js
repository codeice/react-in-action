import React,{ Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'

import store from './store/store'
import Root from './Root'


ReactDOM.render(
 <Root store={store} history={hashHistory} />,
	document.getElementById('root-container')
)



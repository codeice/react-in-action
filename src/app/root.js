import React, { Component } from 'react'
import { Provider } from 'react-redux'
import routes from './route'
import { Router } from 'react-router'


//Provider是由React Redux 提供的高阶组件，用来让你的Redux绑定到React
export default class Root extends Component {
	render() {
		const { store, history } = this.props
		return (
			<Provider store={store}>
				<Router history={history} routes={routes} />
			</Provider>
		)
	}
}

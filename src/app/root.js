import React, { Component,PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { hashHistory } from 'react-router'
import routes from './route'


//Provider是由React Redux 提供的高阶组件，用来让你的Redux绑定到React
class Root extends Component {
	render() {
		const { store } = this.props
		return (
			<Provider store={store}>
				<Router history={hashHistory} routes={routes} />
			</Provider>
		)
	}
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
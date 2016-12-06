import React, { Component,PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router,hashHistory } from 'react-router'
import routes from './route'
import DevTools from './containers/devTools';


//Provider是由React Redux 提供的高阶组件，用来让你的Redux绑定到React
class Root extends Component {
	render() {
		const { store } = this.props
		return (
			<Provider store={store}>
				<div>
					<Router history={hashHistory} routes={routes} />
					<DevTools />
				</div>
			</Provider>
		)
	}
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

//为模块指定默认输出
export default Root;
import React, { Component } from "react"
import NavLink from "./navLink"

export default class Nav extends Component {
	render() {
		return (
			<div className="nav-container">
				<div className="nav-header clearfix">
					<span className="logo">Test</span>
				</div>
				<ul className="nav-list">
					<NavLink to="/" default={true}>Dashboard</NavLink>
					<NavLink to="/Todo">Todo</NavLink>
					<NavLink to="/Demo">Demo</NavLink>
					<NavLink to="/Counter">Counter</NavLink>
				</ul>
			</div>
		)
	}
}

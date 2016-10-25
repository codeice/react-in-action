import React, { Component } from 'react'
import { Link, IndexLink }  from 'react-router'

export default class NavLink extends Component {
	
	renderLink(isIndex){
		if(!!isIndex){
			return (
				<IndexLink to={this.props.to} activeClassName={"active"} >
					{this.props.children}
				</IndexLink>
			)
		}

		return (
			<Link to={this.props.to} activeClassName={"active"}>
				{this.props.children}
			</Link>
		)
	}

	render() {
		return (
			<li className="nav-item">
				{this.renderLink(this.props.default)}
			</li>
		)
	}
}
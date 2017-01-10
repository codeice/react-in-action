import {connect} from 'react-redux'
import React, { PropTypes, Component } from 'react'


class Login extends Component {

	constructor(){
		super();
		this.state={user:{name:'jessie',age:23}};
		console.log('state=',this.state);
	}

	componentDidMount(){
	}


	//render 函数每次渲染都会调用
    render() {
        return (
         <div className = "page-container">
         	<input type="text"  ref='account'/>
             <input type="password" ref="pwd" />
        	<button onClick={::this.login}>登录</button>
         </div>
        )
    }

    login(e){
		e.preventDefault();
		const account=this.refs.account.value;
		const pwd=this.refs.pwd.value;
		console.log('account=',account,'pwd=',pwd);
	}
}

function mapStateToProps(state){
	return {

	}
}

export default connect(mapStateToProps)(Login);